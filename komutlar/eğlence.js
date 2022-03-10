const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let yardım = new Discord.RichEmbed()
  .setTitle('Xantre Bot')
  .addField('a!avatar', '`İstedigin kişinin avatarına bakabilirsin`')
  .addField('a!espri', '`Bot bir espri yapar`')
  .addField('a!fal', '`Bot senin falına bakar`')
  .addField('a!yumrukat', '`İstedigin kişiye yumruk atarsın`')
  .addField('a!çayiç', '`Çay içersiniz`')
  .addField('a!zarat', '`Zar atabilirsiniz`')
  .setColor('RANDOM')
  message.channel.send(yardım)
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['Eglence', 'eglence', 'eğlence'], 
  permLevel: 0
};

exports.help = {
  name: 'Eğlence',
  description: 'taslak', 
  usage: 'Eğlence'
};