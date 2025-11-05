import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8473837135:AAHZqsGdnGkhgzpGUH00UPhHy1O85rT5pIg";

const bot = new TelegramBot(TOKEN, { polling: true });

let lamboPhotoURL = "./images/lamborghini_urus.webp";

bot.on("message", async function (msg) {
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
    const xabar = await bot.sendMessage(chatId, "Iltimos kuting....");

    setTimeout(function () {
      bot.deleteMessage(chatId, xabar.message_id);

      bot.sendPhoto(chatId, lamboPhotoURL, {
        caption: `
        🦅 Lamborghini Urus
The Lamborghini Urus is the ultimate Super SUV — a fusion of luxury, power, and speed. 💨With a 650 HP twin-turbo V8, it sprints from 0–100 km/h in just 3.6s while keeping you in pure comfort and style. 🏁🔥
        `,
      });
    }, 1000);
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
