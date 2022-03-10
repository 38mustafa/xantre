const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let yardım = new Discord.RichEmbed()
  .setTitle('Xantre Bot')
  .addField('a!chat-log', '`Chat log kanalını ayarlar`')
  .addField('a!git', '`Etiketlediğiniz kişinin yanına gidersiniz`')
  .addField('a!kanalkapat', '`Kanalı yazılamaz duruma getirirsiniz`')
  .addField('a!kanalaç', '`Kanalı yazılabilir duruma getirirsiniz`')
  .addField('a!otorol', '`Sunucuya gelenlere oto rol verirsiniz`')
  .addField('a!sil', '`En az 1-100 arasında yazı siler`')
  .addField('a!çek', '`Seste ki kişiyi yanınıza çeker`')
  .addField('a!ban', '`İstediğiniz kişiyi sunucudan banlarsınız`')

  .setColor('RANDOM')
  message.channel.send(yardım)
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['moderasyon','mod'], 
  permLevel: 0
};

exports.help = {
  name: 'Moderasyon',
  description: 'taslak', 
  usage: 'Moderasyon'
};