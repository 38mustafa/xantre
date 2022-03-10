
const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {
if(message.guild.owner.id !== message.author.id) return message.channel.send("Bu komutu sadece sunucu sahibi kullanabilir.")
  let prefix = ayarlar.prefix

  if (!args[0]) {
 message.channel.send(`**Örnek Kullanım:** ${prefix}caps-engel aç/kapat`)
  }
  if (args[0] === 'aç') {
    db.set(`capslock_${message.guild.id}`, "Aktif")
     message.channel.send(`**Capslock Açık Yazanları Engelliycem**`)
  }
   if (args[0] === 'kapat') {
    db.delete(`capslock_${message.guild.id}`)
    message.channel.send(`**Capslock Açık Yazanları Engellemeyi Kapattım**`)
  }
};
exports.conf = {
  aliases: ['capsengel'],
  permLevel: 0
};
exports.help = {
  name: 'caps-engel'
}; 
