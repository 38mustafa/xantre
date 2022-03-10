const Discord = require("discord.js")

exports.run = (client, message, args) => {
var embed = new Discord.RichEmbed()

.setTitle(`REGİSTER`)
.setAuthor(`Bot Bilgi`,message.author.avatarURL,)
.setColor("RANDOM")
.setThumbnail(client.user.avatarURL) 
.addField(` **Sahip**`, `<@818526627368665138>`,true) 
.addField(` **Botun Geliştiricisi**`,`<@688863176850145424>`,true) 
.addField(` **Bot Discord.js Versiyon**`,Discord.version)
.addField(` **Bot İd**`,client.user.id) 
.setTimestamp()
message.channel.sendEmbed(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yapımekibi"],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: 'Yapım Ekibini Gösterir',
  usage: '!yapımcım'
};