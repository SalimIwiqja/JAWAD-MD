require('dotenv').config();
const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const P = require("pino");

// Load your session string from .env
const SESSION_ID = process.env.SESSION_ID || "";

// Initialize
async function startBot() {
    try {
        if (!SESSION_ID) {
            console.error("❌ SESSION_ID not found. Please put it inside .env file");
            return;
        }

        // Load auth from session string
        const { state, saveCreds } = await useMultiFileAuthState("session");

        const sock = makeWASocket({
            logger: P({ level: "silent" }),
            printQRInTerminal: true,
            auth: state
        });

        // Connection updates
        sock.ev.on("connection.update", (update) => {
            const { connection, lastDisconnect } = update;
            if (connection === "open") {
                console.log("✅ WhatsApp bot connected successfully!");
            } else if (connection === "close") {
                console.log("❌ Connection closed, restarting...");
                startBot();
            }
        });

        // Save credentials
        sock.ev.on("creds.update", saveCreds);

        // Message handler
        sock.ev.on("messages.upsert", async (m) => {
            const msg = m.messages[0];
            if (!msg.message || msg.key.fromMe) return;

            const from = msg.key.remoteJid;
            const text = msg.message.conversation || msg.message.extendedTextMessage?.text;

            console.log(`💬 New message from ${from}: ${text}`);

            if (text?.toLowerCase() === "ping") {
                await sock.sendMessage(from, { text: "pong 🏓" });
            }
        });

    } catch (err) {
        console.error("❌ Error:", err);
    }
}

startBot();
