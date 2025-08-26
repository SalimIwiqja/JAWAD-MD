/*  
==============================================
🚀 JAWAD-MD v3.0.0 — Official Release  
==============================================
💡 Next-Gen WhatsApp MD Bot for 2025  
🔥 Ultra-Fast | Smart AI | Packed with Features  

📌 Developed & Maintained By: JawadTech  
❤️ Crafted with Passion, Built for Performance  

⚠️ Note: Old deployment repository is now closed.  
✅ Deploy only from the NEW official repository.  

Powered By → JawadTechX | 2025 🚀
==============================================
*/

const { Client } = require('whatsapp-web.js'); // or Baileys if you use it
const fs = require('fs');
const path = require('path');

// Load session from config
let sessionData;
const sessionPath = path.join(__dirname, 'config', 'session.json');

if (fs.existsSync(sessionPath)) {
    sessionData = require(sessionPath);
    console.log('Session loaded successfully.');
} else {
    console.log('No session found, bot will not run.');
    process.exit(1); // stop if no session
}

const client = new Client({ session: sessionData });

client.on('ready', () => {
    console.log('✅ JAWAD-MD Bot is now online!');
});

client.on('message', msg => {
    if(msg.body === '!ping'){
        msg.reply('pong');
    }
});

client.initialize();
