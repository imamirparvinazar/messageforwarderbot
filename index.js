const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
const bot = new TelegramBot('6812587488:AAFQAmQpyE6oI5_RT0KFZKqH0KIAG3CgaYw', { polling: true });

// Replace 'YOUR_CHANNEL_ID' with your actual channel ID
const channel = '-1001573630378';

// Set the start command message
bot.setMyCommands([
  { command: 'start', description: 'Start the bot' },
]);

// Event listener for incoming messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Handle the /start command separately
  if (messageText.startsWith('/start')) {
    // Send a specific message when /start command is used
    bot.sendMessage(chatId, 'سلام! بهم پیام بفرست تا من با افزودن یه متن به کانالت بفرستم!');
  } else {
    // Append your specific text to the received message
    const appendedMessage = messageText + '\n🌐 @testusername\n 🌐 @testusername2';

    // Send the modified message to the channel
    bot.sendMessage(channel, appendedMessage);
    bot.sendMessage(msg.chat.id, "پیام ارسال شد!")
  }
});