const Lavan = require("../../bot") const config = require("../../config") const Language = require('../../language'); const Lang = Language.getString('system_stats'); module.exports.run = async (bot, message, args) => { var randomstring = arr => arr[Math.floor(Math.random() * arr.length)]; ILTIFAT = randomstring([ "🎆 Endişelenme! Seni yanlız bırakmam. 😈×͜×︻┳═一Clyrush︻┳═一╰‿╯😈, LavanUserbot çalışıyor. 

Bot Versiyonu: v0.2" ]) message.delete(); await message.chat.sendMessage(ILTIFAT) } module.exports.config = { command: "bot", description: `Botun Aktif zolup Olmadığını Kontrol Eder` }
