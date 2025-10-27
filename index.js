import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8473837135:AAHZqsGdnGkhgzpGUH00UPhHy1O85rT5pIg";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", function (msg) {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Salom");
});

console.log("Bot ishga tushdi");
