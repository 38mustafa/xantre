const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let yardım = new Discord.RichEmbed()
  .setTitle('Xantre Bot')
  .addField('a!banlist', '`Sunucuda banlanan kişileri gösterir`')
  .addField('a!forceban', '`Sunucuda olmayanı id ile banlama`')
  .addField('a!sa-as aç', '`Selam verir`')
  .addField('a!sa-as kapat', '`Selam vermeyi kapatır`')
  .addField('a!sustur', '`Belirttiğiniz kişiyi susturur`')
  .addField('a!oylama', '`Oylama yapabilirsiniz`')
  .addField('a!herkesiçek', '`Sesteki kişilerin hepsini istediğiniz odaya çekersiniz`')
  .setColor('RANDOM')
  message.channel.send(yardım)
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['moderasyon2','mod2'], 
  permLevel: 0
};

exports.help = {
  name: 'Moderasyon2',
  description: 'taslak', 
  usage: 'Moderasyon2'
};