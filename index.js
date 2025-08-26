const { Client } = require('whatsapp-web.js');
const fs = require('fs');

const sessionPath = './session.json'; // session file in root

if (!fs.existsSync(sessionPath)) {
    console.log('❌ No session found. Bot will exit.');
    process.exit(1);
}

const sessionData = require(sessionPath);

const client = new Client({ session: sessionData });

client.on('ready', () => {
    console.log('✅ JAWAD-MD Bot is online!');
});

client.on('message', msg => {
    if(msg.body === '!ping'){
        msg.reply('pong');
    }
});

client.initialize();
