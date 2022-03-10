const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let yardım = new Discord.RichEmbed()
  .setTitle('Xantre Bot')
  .addField('a!caps-engel', '`Capslock açık yazanları engeller`')
  .addField('a!rol-koruma', '`Rol silmeyi engeller`')
  .addField('a!küfürengel', '`Küfürleri engeller`')
  .addField('a!kanal-koruma', '`Kanal silmeyi engeller`')
  .setColor('RANDOM')
  message.channel.send(yardım)
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['Güvenlik', 'güvenlik',], 
  permLevel: 0
};

exports.help = {
  name: 'güvenlik',
  description: 'taslak', 
  usage: 'güvenlik'
};