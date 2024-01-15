const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
const bot = new TelegramBot('6962275572:AAH-WL3dmjOtY_y1uDeGBw-DdVpwoKn74ig', { polling: true });

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
  const messagePhoto = msg.photo;
  const messageCaption = msg.caption;

  // Handle the /start command separately
  if (messageText.startsWith('/start')) {
    // Send a specific message when /start command is used
    bot.sendMessage(chatId, "سلام! پیامت رو بفرست تا به کانالت هدایت کنم. یادت نره من رو در کانالت ادمین کنی.");
  } else if (messageText !== undefined) {
    // Append your specific text to the received message
    const appendedMessage = messageText + '\n\nراه های ارتباطی ما: \n🌐 @crypto_invest2024\nکانال: \n🌐 @crypto_859099';

    // Send the modified message to the channel
    bot.sendMessage(channel, appendedMessage);
    bot.sendMessage(msg.chat.id, "پیام ارسال شد!")
  } else if (messagePhoto !== undefined) {
    // Get the ID of the last photo in the array (the largest size)
    const photoId = messagePhoto[messagePhoto.length - 1].file_id;

    // Construct the caption with appended text, if available
    let caption = '';
    if (messageCaption !== undefined ) {
      caption = messageCaption + '\n\nراه های ارتباطی ما: \n🌐 @crypto_invest2024\nکانال: \n🌐 @crypto_859099';
    } else {
      caption = '\n\nراه های ارتباطی ما: \n🌐 @crypto_invest2024\nکانال: \n🌐 @crypto_859099';
    }

    // Forward the photo to the channel with the caption
    bot.sendPhoto(channel, photoId, { caption: caption });
    bot.sendMessage(msg.chat.id, "پیام ارسال شد!")
  }
});
