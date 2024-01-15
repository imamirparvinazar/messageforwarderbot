const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
const bot = new TelegramBot('6812587488:AAFQAmQpyE6oI5_RT0KFZKqH0KIAG3CgaYw', { polling: true });

// Replace 'YOUR_CHANNEL_ID' with your actual channel ID
const channel = '-1001573630378';

// Event listener for incoming messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Append your specific text to the received message
  const appendedMessage = messageText + ' test text';

  // Send the modified message to the channel
  bot.sendMessage(channel, appendedMessage);
});