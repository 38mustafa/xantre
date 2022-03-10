
const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {
if(message.guild.owner.id !== message.author.id) return message.channel.send("Bu komutu sadece sunucu sahibi kullanabilir.")
  let prefix = ayarlar.prefix

  if (!args[0]) {
 message.channel.send(`**Örnek Kullanım:** ${prefix}kanal-koruma aç/kapat`)
  }
  if (args[0] === 'aç') {
    db.set(`kanalk_${message.guild.id}`, "Aktif")
     message.channel.send(`**Kanalları Silmeye Çalışanları Engelliycem**`)
  }
   if (args[0] === 'kapat') {
    db.delete(`kanalk_${message.guild.id}`)
    message.channel.send(`**Dikkat Et Kanalları Silebilirler**`)
  }
};
exports.conf = {
  aliases: ['kanalkoruma'],
  permLevel: 0
};
exports.help = {
  name: 'kanal-koruma'
}; 
