// client.js - plain browser WebSocket client

// NOTE: change the host/port if your server runs elsewhere
const WS_HOST = (location.hostname === "localhost" || location.hostname === "127.0.0.1")
    ? `ws://${location.hostname}:3000`
    : `ws://${location.hostname}:3000`; // change for remote server if needed

const connectBtn = document.getElementById("connectBtn");
const sendBtn = document.getElementById("sendBtn");
const usernameInput = document.getElementById("username");
const messageInput = document.getElementById("messageInput");
const messagesList = document.getElementById("messages");
const statusEl = document.getElementById("status");

let ws = null;
let connected = false;

function setStatus(text, color = "") {
    statusEl.textContent = text;
    statusEl.style.color = color || "";
}

function formatTime(ts) {
    const d = new Date(ts);
    return d.toLocaleTimeString();
}

function escapeHtml(str) {
    // very small sanitizer for display (prevents simple XSS)
    return str.replace(/[&<>"']/g, (m) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[m]));
}

function addMessage({ username, text, timestamp, self = false }) {
    const li = document.createElement("li");
    li.className = "message" + (self ? " me" : "");
    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = `${escapeHtml(username)} • ${formatTime(timestamp)}`;
    const body = document.createElement("div");
    body.className = "body";
    body.innerHTML = escapeHtml(text);

    li.appendChild(meta);
    li.appendChild(body);
    messagesList.appendChild(li);
    // auto scroll
    messagesList.parentElement.scrollTop = messagesList.parentElement.scrollHeight;
}

function addNotification({ text, timestamp }) {
    const li = document.createElement("li");
    li.className = "notification";
    li.textContent = `${text} • ${formatTime(timestamp)}`;
    messagesList.appendChild(li);
    messagesList.parentElement.scrollTop = messagesList.parentElement.scrollHeight;
}

function connect() {
    if (connected) return;
    const username = (usernameInput.value || "Anonymous").trim().slice(0, 32);
    if (!username) {
        alert("Please enter a name before connecting.");
        return;
    }

    ws = new WebSocket(WS_HOST);

    ws.addEventListener("open", () => {
        connected = true;
        setStatus("Connected", "#9ae6b4");
        // send join message
        ws.send(JSON.stringify({ type: "join", username }));
        connectBtn.textContent = "Disconnect";
    });

    ws.addEventListener("message", (evt) => {
        let msg;
        try {
            msg = JSON.parse(evt.data);
        } catch (err) {
            return;
        }

        switch (msg.type) {
            case "message":
                addMessage({
                    username: msg.username,
                    text: msg.text,
                    timestamp: msg.timestamp || Date.now(),
                    self: msg.username === username
                });
                break;

            case "notification":
                if (msg.subtype === "join") {
                    addNotification({ text: `${msg.username} joined`, timestamp: msg.timestamp || Date.now() });
                } else if (msg.subtype === "leave") {
                    addNotification({ text: `${msg.username} left`, timestamp: msg.timestamp || Date.now() });
                }
                break;

            case "server":
                // server info message
                addNotification({ text: msg.text || "server message", timestamp: Date.now() });
                break;

            default:
                break;
        }
    });

    ws.addEventListener("close", () => {
        connected = false;
        setStatus("Disconnected", "#ffb4b4");
        connectBtn.textContent = "Connect";
        addNotification({ text: "You are disconnected", timestamp: Date.now() });
    });

    ws.addEventListener("error", () => {
        setStatus("Connection error", "#ffb4b4");
    });
}

function disconnect() {
    if (!ws) return;
    ws.close();
    ws = null;
    connected = false;
    setStatus("Disconnected", "#ffb4b4");
    connectBtn.textContent = "Connect";
}

connectBtn.addEventListener("click", () => {
    if (connected) disconnect();
    else connect();
});

sendBtn.addEventListener("click", () => {
    const text = (messageInput.value || "").trim();
    if (!text || !ws || ws.readyState !== WebSocket.OPEN) return;
    const payload = { type: "message", text, timestamp: Date.now() };
    ws.send(JSON.stringify(payload));
    // show locally immediately (optimistic)
    addMessage({ username: usernameInput.value || "You", text, timestamp: Date.now(), self: true });
    messageInput.value = "";
});

messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendBtn.click();
});
