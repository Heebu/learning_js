# Real-time Chat App (WebSockets)

> A simple, plain-JavaScript real-time chat application using WebSockets.  
> Designed for learning: build a working chat server (Node.js) and a minimal browser client that connects via WebSocket, exchanges messages in real time, and demonstrates the core concepts of real-time web apps.

---

## 🎯 Objective
Create a lightweight chat application that enables multiple users to:
- Connect to a server via WebSocket
- Join a shared chat room (single room)
- Send and receive messages in real time
- See basic user join/leave notifications

This project intentionally uses **plain JavaScript** for both client and server to keep things minimal and educational.

---

## 🔧 Tech Stack
- **Frontend:** HTML, CSS, Vanilla JavaScript (WebSocket API)
- **Backend:** Node.js (plain JS). Uses the [`ws`] WebSocket library for server-side WebSocket handling (very small, focused dependency).
- **No frontend frameworks**, no bundlers — open `index.html` in the browser for development.

> Note: `ws` is recommended for a simple, reliable WebSocket server in Node. If you prefer truly zero-dependency, the README has pointers for implementing WebSocket handling against the `http` upgrade event, but `ws` keeps the example focused on chat logic rather than protocol details.

---

## 📂 Project Structure
```
realtime-chat/
│
├── server/
│   ├── package.json
│   └── server.js
│
├── client/
│   ├── index.html
│   ├── style.css
│   └── client.js
│
└── README.md        <-- you are here
```

---

## ⚙️ Features
- Real-time broadcast: messages from one client are broadcast to all connected clients.
- Simple username prompt when connecting.
- Join / leave notifications.
- Timestamped messages (client-side).
- Minimal UX: message input + message list.

---

## 🛠 Setup & Run (Quickstart)

1. **Install Node.js** (v14+ recommended).  
2. **Create project folder** and copy the structure above.  
3. **Install dependencies** for the server:
   ```bash
   cd realtime-chat/server
   npm init -y
   npm install ws
   ```
4. **Start the server**
   ```bash
   node server.js
   ```
   By default the server listens on port `3000` (configurable).

5. **Open the client**
   - Serve the `client` folder via a static server (recommended) or open `client/index.html` directly.
   - For multiple test clients, open `index.html` in several browser tabs or different browsers and connect to the server.

---

## 🔎 Architecture & Flow (High-level)

1. **Client** (browser):
   - Prompts for a username.
   - Creates a `WebSocket` connection to `ws://<server-host>:<port>`.
   - Sends messages as JSON objects `{ type: "message", text, username, timestamp }`.
   - Listens for messages from the server and renders them.

2. **Server** (Node + `ws`):
   - Accepts WebSocket connections.
   - Maintains a list of connected clients (sockets + username).
   - Broadcasts incoming messages to all clients.
   - Broadcasts join/leave notifications.

---

## ✅ Message Protocol (JSON)
Clients and server exchange small JSON messages with a `type` field. Example message formats:

- **User joined**
```json
{ "type": "join", "username": "Idris" }
```

- **Chat message**
```json
{ "type": "message", "username": "Idris", "text": "Hello!", "timestamp": 1620000000000 }
```

- **User left**
```json
{ "type": "leave", "username": "Idris" }
```

- **Server broadcast (any of the above)**  
Server re-broadcasts these messages to all connected clients — clients render accordingly.

---

## 🧩 Client UX Suggestions
- Show a small chat log with messages and metadata (username, time).
- Distinguish your messages (different background or alignment).
- Auto-scroll message list to the latest message.
- Simple input validation (no empty messages).
- Consider using local time formatting for timestamps.

---

## 🔒 Security & Production Notes
- **This repo is for learning** — the simple example does **not** include authentication, rate limiting, or secure deployment concerns.
- For production:
  - Use `wss://` (TLS) and serve the client over HTTPS.
  - Authenticate users before opening WebSocket connections (e.g., sign a short-lived token in a login step).
  - Implement rate limiting and message size limits to prevent abuse.
  - Sanitize/escape incoming text before rendering to prevent XSS.
  - Consider using a message broker (Redis Pub/Sub) and horizontal scaling for many users.

---

## 🧪 Testing Tips
- Open multiple browser tabs and verify messages appear in all tabs.
- Try disconnecting a client — others should receive a leave notification.
- Test with fast message bursts to see how the server handles load (for learning; don't overload).

---

## 📈 Enhancements (Ideas for the Roadmap)
- Private/direct messages (user-to-user).
- Multiple rooms / channels with room join/leave handling.
- Message history stored in a simple DB (e.g., SQLite, Redis, or MongoDB).
- Typing indicators (`type: "typing"` events).
- Read receipts and message IDs.
- Simple authentication (username + password) and persistent accounts.
- Desktop notifications for new messages.
- Mobile-friendly UI and responsive layout.
