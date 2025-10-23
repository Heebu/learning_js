
const WebSocket = require("ws");

const PORT = process.env.PORT || 3000;
const wss = new WebSocket.Server({ port: PORT });

console.log(`WebSocket server running on ws://localhost:${PORT}`);

// Keep track of clients and their usernames
// Map<WebSocket, { username: string }>
const clients = new Map();

function broadcast(payload, exceptSocket = null) {
    const data = JSON.stringify(payload);
    for (const client of wss.clients) {
        if (client.readyState === WebSocket.OPEN && client !== exceptSocket) {
            client.send(data);
        }
    }
}

wss.on("connection", (ws) => {
    // when a new client connects, we wait for them to send a "join" message
    ws.isAlive = true;

    ws.on("pong", () => {
        ws.isAlive = true;
    });

    ws.on("message", (raw) => {
        let msg;
        try {
            msg = JSON.parse(raw);
        } catch (err) {
            // ignore malformed messages
            return;
        }

        // Expecting messages with a `type` field
        switch (msg.type) {
            case "join": {
                // { type: "join", username }
                const username = String(msg.username || "Anonymous").slice(0, 32);
                clients.set(ws, { username });
                console.log(`${username} joined`);

                broadcast({
                    type: "notification",
                    subtype: "join",
                    username,
                    timestamp: Date.now()
                });
                break;
            }

            case "message": {
                // { type: "message", text, timestamp? }
                const meta = clients.get(ws);
                if (!meta) {
                    // If user hasn't joined yet, ignore message
                    return;
                }
                const text = String(msg.text || "").slice(0, 1000); // limit length
                const payload = {
                    type: "message",
                    username: meta.username,
                    text,
                    timestamp: Date.now()
                };
                broadcast(payload);
                break;
            }

            default:
                // unknown message types can be ignored or handled
                break;
        }
    });

    ws.on("close", () => {
        const meta = clients.get(ws);
        if (meta && meta.username) {
            console.log(`${meta.username} left`);
            broadcast({
                type: "notification",
                subtype: "leave",
                username: meta.username,
                timestamp: Date.now()
            });
        }
        clients.delete(ws);
    });

    ws.on("error", (err) => {
        console.error("Socket error:", err && err.message);
    });

    // Optionally request the client to send a join message on connect
    ws.send(JSON.stringify({ type: "server", text: "connected" }));
});

// Basic heartbeat to detect dead sockets
const interval = setInterval(() => {
    for (const ws of wss.clients) {
        if (ws.isAlive === false) {
            ws.terminate();
            continue;
        }
        ws.isAlive = false;
        ws.ping(() => {});
    }
}, 30000);

wss.on("close", () => clearInterval(interval));
