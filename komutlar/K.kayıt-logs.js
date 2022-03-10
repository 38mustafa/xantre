const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Kanal ayarlamak için yeterli yetkiye sahip değilsin.");
  
  
let kanal = message.mentions.channels.first()   
  
if(!kanal) return message.reply('Bir kanal belirtmelisin.')  
  

  let tamam = new Discord.RichEmbed()   
  .setTitle('İşlem Tamam!')
  .setDescription('Kayıt Log '+kanal+' olarak ayarlandı.!')
  .setColor('BLACK')
  message.channel.send(tamam)
  
  
  
  db.set(`kayıtlog_${message.guild.id}`, kanal.id)
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'kayıt-log',
  description: 'taslak', 
  usage: 'kayıt-kanal'
};
