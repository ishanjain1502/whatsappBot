const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { analyzeImage } = require('./routes/service.js');

// dotnev initialization
require('dotenv').config();

// WhatsApp client configuration
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: { headless: true }
});

// Handle QR code generation
client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

// Handle client authentication
client.on('authenticated', () => {
  console.log('Client authenticated!');
});

// Handle ready state
client.on('ready', () => {
  console.log('Client is ready!');
});

// Process incoming messages
client.on('message', async (msg) => {
    console.log("message recieved");
  if (msg.hasMedia) {
    try {
      const media = await msg.downloadMedia();
      console.log('media found')
      if (media.mimetype.startsWith('image/')) {
        const response = await analyzeImage(media.data, media.mimetype);
        console.log('response ==> ', response);
        msg.reply(response);
      }
    } catch (error) {
      console.error('Error processing media:', error);
      msg.reply('Sorry, there was an error processing your image.');
    }
  }
});


// Start client
client.initialize();