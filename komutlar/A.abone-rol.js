const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("erkek rolünü ayarlamak için yeterli yetkiye sahip değilsin.");


  let rol = message.mentions.roles.first() || message.guild.roles.get(args[0])
  
  if(!rol) return message.reply('İşleme devam etmek için bir rol veya rol İD belirtmen gerekiyor.')
  
  
    let tamam = new Discord.RichEmbed()   
  .setTitle('İşlem Tamam!')
  .setDescription('Abone Rolü '+rol+' olarak ayarlandı.')
  .setColor('BLACK')
  message.channel.send(tamam)
  
  
  
  db.set(`abonerol_${message.guild.id}`, rol.id)
  
  
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'abone-rol',
  description: 'taslak', 
  usage: 'erkek-rol'
};
