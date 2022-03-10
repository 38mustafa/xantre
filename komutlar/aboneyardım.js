const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let yardım = new Discord.RichEmbed()
  .setTitle('Xantre Bot')
  .addField('**__DİKKAT!__**','**Altaki Sıraya Göre Ayarlayınız.!**')
  .addField('a!abone-rol', '`Abone rolünü ayarlar`')
  .addField('a!abone-sorumlusu', '`Abone Sorumlusu rolünü ayarlar`')
  .addField('a!abone-kanal', '`Abone Kanalını ayarlar`')
  .addField('a!abonelog', '`Abone Log Kanalını Ayarlarsınız.`')
  .addField('a!abone', '`Abone olarak kayıt edersiniz`')
  .setColor('RANDOM')
  message.channel.send(yardım)
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['abone-sistemi'], 
  permLevel: 0
};

exports.help = {
  name: 'abone-yardım',
  description: 'taslak', 
  usage: 'kayıt'
};