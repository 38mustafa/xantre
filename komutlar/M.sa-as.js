
const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {

let prefix = ayarlar.prefix
    if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send('⛔ Bu komudu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!');

  
  if (!args[0]) {
    let sa = new Discord.RichEmbed()
    .setDescription(`⛔ Sa-as yazısını açmak için; \`${prefix}sa-as aç veya d!sa-as kapat Yazmalısın\``)
    .setColor('GREEN')
    .setTimestamp()
    return message.channel.send(sa)
  }
  if (args[0] === 'aç') {
    
    db.set(`saas_${message.guild.id}`, "Aktif")
        let sa = new Discord.RichEmbed()
    .setDescription(`Başarıyla botun \`Aleyküm selam\` yazmasını açtınız., Artık bot \`sa\` yazıldığında cevap verecek.`)
        .setColor('GREEN')
    .setTimestamp()
    return message.channel.send(sa)
  }
   if (args[0] === 'kapat') {
    
    db.delete(`saas_${message.guild.id}`)
      let sa = new Discord.RichEmbed()
    .setDescription(`Başarıyla \`Aleyküm selam\` yazmasını kapattınız, Artık bot \`sa\` yazıldığında cevap vermeyecek.`)
      .setColor('GREEN')
    .setTimestamp()
    return message.channel.send(sa)
}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sa-as-sistemi"],
  permLevel: 0
};

exports.help = {
  name: 'sa-as',
  description: 'Selamün aleyküm, Aleyküm selam',
  usage: 'sa-as'
};