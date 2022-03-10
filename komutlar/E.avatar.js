const Discord = require("discord.js");
exports.run = (client, message, args) => {
  var kisi = message.mentions.users.first() ||  client.users.get(args[0]) || message.author;
  const embed = new Discord.RichEmbed()
    .setColor(message.guild.me.displayColor)
    .setDescription(`Tag:\`${kisi.username}\`\nİD:\`${kisi.id}\``)
    .setImage(`${kisi.avatarURL}`)
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pp"],
  permLevel: 0
}; 

exports.help = {
  name: "avatar"
}; 