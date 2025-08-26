
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

//add your session id

global.session = "https://khanxmd-pair.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "IK~H4sIAAAAAAAAA5VU25KiSBT8l3rFGAG5qBEdsQiKeAVRvGzMQwkllFytKgSc6H+fwO6enofd2V6e4FCRlSczz/kBshxTNEcNGP4ABcF3yFD7ypoCgSEYlZcLIqADAsggGILGVMx6jLvLgMbnbTLBXXmdGdl4xPGTarTCl5Cvyqt8NafhC3jtgKI8J9j/A2D1aK4HY9G9Tzy2uG53fRnvVDV5OGG1061Ht+yWeyqlo6CuXsBriwgxwVk4LiKUIgKTOWpsiMnX6PdNM8P2YbCpruno2Df69XzPCn+xiWqOrjfJaSAqFFrqWdC+Rn/DJhtxMK+9mq0cex6Q2fk+gsZYlcODnc7JWAqogQ+pFfJv9CkOMxRYAcoYZs2XdV/OhWC0PDTRVdCFTS5x1cTdHu5+kCdwhwSUQZ9fc+Qh7OnXiJOHYm+brm1ESmQ7Bpxuc7ih5mNkDGrP2xixl9uJYG49QfqduE0+shL/H93x7JDmD4VE0YhfLIQu56Lzrb6TSeGWxu5o6KEdKpVd7bPl1+hrjkkry417lhAXC3QSqpEnZTgt8UHLnT4q1dqa0NC4T6tP+pCV5E8s55LJufi64w5ONqGr8LA6pFIyKW1NrSXLJA1E+2Xk5Iaqn+lMX8dJhRMaKXMu9k6KJE8aHIXU0U/JhifJvduDFQy1l2dHMWqsAAyF1w4gKMSUEchwnrW1gdABMLi7yCeIPdUFJ8bJO8y55CDi9SFbqV26wrcDLsRI8HHknCVd9IXGsSXpBXRAQXIfUYqCKaYsJ80SUQpDRMHw7+8dkKGavfnW3tYTOuCCCWW7rCySHAYfpn78hL6flxlzm8zX2xdEwJD/LCPGcBbSVsYyg8SP8B3pEWQUDC8woehXg4igAAwZKdGvodXzoNVdNL3TwjnOQQekTz9w0FYFUeFlQe5Lojgc/EW/VS0qLIpvGWKgA5LnKWGgyj1eVsRevy8+D7b1DshgCwVcmOC01fudboseIAZxQsEQ6Gvbqomjj5cwZf2daWrjUNNDDXy29xGTNx9U3ZVDXtHvsnK6q2rmLS7TcDBRjptU4h22cx2xzLXosd/lL/8A0m6cuHb6Mz+p/D23yMaZGC20amJmvpK4vaPSZ6X3uGlE0lyfe8z6LObv/YfUU4URua09TtnPi70Ue/M84SM/Y7N0N7WNNlMdEKA79tHvl801FEe5V4qxeDuVQTcS9yi4bG/WrGD+wja1yLQMzWPm7GzXEwWtt0JQXwsUhWext0L8A0shq4plJNfW2bwet9C4YOctwM8BSt4XF35mqzWu/bxg9NwD7x78l5FvvNu48a+d3yDeF8u/DOcIVXF5XK1DwqH0zHGy4PZqyd6gdHwqV+OFN45X5KZZvpDMwevr9w4oEsguOUnBEMAsIPkzJyQv2/xa2SX/w2W6trPG4VvjCaRM+5yJLU4RZTAtwFBQZUUURbEvvJ2ySV5MIY1aDTxVve3agDdaUbgMso8RA1r7rEcYvP4EhzpXV30HAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "true", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed By AESON MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "212605158422", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "Salim", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "Salim", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "Li 7wak", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "true", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "null, pm, dm, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "AESON-MD", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://i.postimg.cc/ydmNtz0N/125265684b09c7e1dc6ae0d7e0ded4aa.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "i am aeson md",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
//KHAN MD; 🔥💸💀
