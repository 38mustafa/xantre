const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let every = message.guild.roles.find(r => r.name === "@everyone");
  message.channel.overwritePermissions(every, {
    SEND_MESSAGES: false
  });

  message.channel.send("Sohbet kanalı ``Yazılamaz`` durumuna getirildi.");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kanalkapat"],
  kategori: "sohbet",
  permLevel: 3
};

exports.help = {
  name: "kanal-kapat",
  description: "Sohbetinizi kapatmaya yarar.",
  usage: "kapat"
};