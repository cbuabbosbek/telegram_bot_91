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
        reply_markup: {
          inline_keyboard: [
            [
              { text: "Rasmlar", callback_data: "photos" },
              { text: "Batafsil", callback_data: "info" },
            ],
            [{ text: "Sotib olish", callback_data: "buy" }],
          ],
        },
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

bot.on("callback_query", function (query) {
  const chatId = query.message.chat.id;
  const firstName = query.message.chat.first_name;
  const data = query.data;
  
  console.log(`chatId: ${chatId} ==> data: ${data}`);
  if (data == "photos") {
    bot.sendMessage(chatId, "Rasmlar");
  } else if (data == "info") {
    bot.sendMessage(chatId, "Batafsil ma'lumot");
  } else if (data == "buy") {
    bot.sendMessage(
      chatId,
      `Hurmatli ${firstName},
Siz lamborghini sotib olish uchun Avazbekga $180,000 berdingizmi?
    `,
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "Tasdiqlash ✅", callback_data: "yes_lambo" },
              { text: "Bekor qilish ❌", callback_data: "cancel_lambo" },
            ],
          ],
        },
      }
    );
  } else if (data == "yes_lambo") {
    bot.sendMessage(
      chatId,
      `Tabriklaymiz ${firstName}, siz Lamborghini sotib oldingiz! 🎉`
    );
  } else if (data == "cancel_lambo") {
    bot.sendMessage(chatId, `Buyurtma muvaffaqiyatli bekor qilindi! ❌`);
  }

  // console.log(query);
});

// npm install nodemon --save-dev

console.log("Bot ishga tushdi  ");
