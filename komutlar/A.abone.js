const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 

  
  
    //------------------------------------------------ROL-VERME-----------------------------------------------\\    
  
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir Kullanıcı Etiketlemelisin..")
    const stg = message.guild.member(member)
   
//------------------------------------------------ROL-VERME-----------------------------------------------\\    
  
  

  
 let abonerol = await db.fetch(`abonerol_${message.guild.id}`)  
 if(!abonerol) return message.reply('Abone Rolü Ayarlanmamış.\n Bilgi İçin: \`a!abone-yardım\`')
  
  
let rol = await db.fetch(`aboneyetkilisi_${message.guild.id}`)  

if(!rol) return message.reply('Abone Yetkilisi Rolü Ayarlanmamış.\n Bilgi İçin: \`a!abone-yardım\`')
  
if(!message.member.roles.has(rol)) {
  
  
  
  let hata = new Discord.RichEmbed()
  .setTitle('**__HATA__**')
  .setDescription('Bu Komutu Kullanmak İçin **'+message.guild.roles.get(rol).name+'** Rolüne Sahip Olmalısın.')
  .setThumbnail(message.author.avatarURL)
  .setColor('BLACK')
  message.channel.send(hata).then(s => s.delete(15000))
  return
  }  
  

  
  
let kanal = await db.fetch(`abonekanal_${message.guild.id}`)
  
if(!kanal) return message.reply('Abone Yapılcak Kanal Ayarlanmamış!\n Bilgi İçin: \`a!abone-yardım\`')

 if(message.channel.id !== kanal) {
  
  
  
  let hata = new Discord.RichEmbed()
  .setTitle('**__HATA__**')
  .setDescription('Bu komut sadece Abone kanalında; <#'+kanal+'> Kanalında kullanılabilir.')
  .setThumbnail(message.author.avatarURL)
  .setColor('BLACK')
  message.channel.send(hata).then(s => s.delete(15000))
  return
  }  
  
  var abonelog = await db.fetch(`abonelog_${message.guild.id}`);
let abonelogs = message.guild.channels.find("id", abonelog);
  if(!abonelogs) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Abone Log Ayarlanmamış!\n Bilgi İçin: \`a!abone-yardım\``).setColor('#7c02ff'));
  


  let user = message.mentions.users.first()
  
  
  if(!user) return message.channel.send('**Abone Vermek İstedin Kişiyi belirtin!').then(x => x.delete(10000))
  
  if(user.bot) return message.channel.send('Rol Vermek İstedin Kişi \`BOT\` Olduğu İçin Rol Veremem.').then(x => x.delete(10000))
  
  
 if(message.guild.members.get(user.id).roles.has(abonerol)) return message.reply('Bu Kullanıcı Zaten Kanala Abone Olmuş\n\`Not: Rolü Olduğu İçin Veremiyorum.\`') 
  
 
 let tamamdır = new Discord.RichEmbed()
  .setDescription(`
• Abone Yetkilisi : <@${message.author.id}>
• Abone Verilen : ${member}`) 
.setColor('GREEN') 
.setTimestamp()
.setThumbnail(message.guild.iconURL) 
.setFooter(client.user.username + ' | Abone Sistemi Sistemi') 
message.channel.send(tamamdır).then(s => {

  message.guild.members.get(user.id).addRole(abonerol)
})

  let yardım = new Discord.RichEmbed()
  .setTitle(`**__Abone Logs__**`)
  .setDescription(`
• Abone Yetkilisi : <@${message.author.id}>
• Abone Verilen : ${member}`) 
.setColor('GOLD') 
.setTimestamp()
.setFooter(client.user.username + ' | Abone Sistemi Sistemi') 
.setThumbnail(message.guild.iconURL) 
abonelogs.send(yardım)
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["abonever","a"], 
  permLevel: 0
};

exports.help = {
  name: 'abone',
  description: 'taslak', 
  usage: 'erkek'
};
