require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN_BOT;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if(text==='/start') {
    await bot.sendMessage(chatId, 'Pastda tugma paydo bo`ladi', {
      reply_markup: {
        inline_keyboard: [
          [{text: "button", callback_data: 'fds'}, {text: "kun.uz", web_app: {url: 'https://kun.uz'}}]
        ]
      }
    })
  }
});
