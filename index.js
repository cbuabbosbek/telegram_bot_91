import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8473837135:AAHZqsGdnGkhgzpGUH00UPhHy1O85rT5pIg";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", function (msg) {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstname = msg.chat.first_name;
  if (text == "/start") {
    bot.sendMessage(chatId, `Xush kelibsiz, ${firstname}`, {
      reply_markup: {
        keyboard: [
          [{ text: "Boshlash 🔥" }],
          [{ text: "Menu 🥩" }, { text: "Sozlamalar ⚙️" }],
        ],
        resize_keyboard: true,
      },
    });
  } else if (text == "Boshlash 🔥") {
    bot.sendMessage(chatId, "Boshlanyaptii....");
  } else if (text == "Menu 🥩") {
    bot.sendMessage(chatId, "Menyuga xush kelibsiz....");
  } else if (text == "Sozlamalar ⚙️") {
    bot.sendMessage(chatId, "Sozlamalar xush kelibsiz ⚙️....");
  } else {
    bot.sendMessage(chatId, "❗️ Xatolik, iltimos /start tugmasini bosing... ");
  }
});

// npm install nodemon --save-dev

console.log("Bot ishga tushdi  ");
