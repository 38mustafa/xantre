const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let yardım = new Discord.RichEmbed()
  .setTitle('Xantre Bot')
  .addField('a!erkek-rol', '`Erkek rolünü ayarlar`')
  .addField('a!kız-rol', '`Kız rolünü ayarlar`')
  .addField('a!kayıt-sorumlusu', '`Kayıt Sorumlusu rolünü ayarlar`')
  .addField('a!kayıt-log', '`Kayıt Log ayarlar`')
    .addField('a!kayıt-kanal', '`Kayıt Kanalını ayarlar`')
  .addField('a!kayıtsız-rol', '`Kayıtsız Rolünü ayarlar`')
  .addField('a!erkek', '`Erkek olarak kayıt edersiniz`')
  .addField('a!kız', '`Kız olarak kayıt edersiniz`')
  .addField('a!tag-ayarla', '`Tag Sistemi Ayarlarsın.`')
  .addField('a!tag-sistemi (tag)/a!tag sıfırla', '`Tag Sistemi Ayarlarsın.`')
  .setColor('RANDOM')
  message.channel.send(yardım)
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['kayıt-sistemi', 'kayit'], 
  permLevel: 0
};

exports.help = {
  name: 'kayıt',
  description: 'taslak', 
  usage: 'kayıt'
};