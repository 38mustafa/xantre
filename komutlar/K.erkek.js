const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 

  
  
    //------------------------------------------------DB LER-----------------------------------------------\\    
  
   let kızrol = await db.fetch(`kayıterkek_${message.guild.id}`)  
 
   let kayıtsız = await db.fetch(`kayıtsız_${message.guild.id}`)  

 
 if(!kızrol) return message.reply('Kayıt erkek rolü ayarlanmamış.') 

let rol = await db.fetch(`kayıtcırol_${message.guild.id}`)  

if(!rol) return message.reply('Kayıtcı rolü ayarlanmamış.')

  let kanal = await db.fetch(`kayıtkanal_${message.guild.id}`)
  
if(!kanal) return message.reply('Kayıt kanalı ayarlanmamış!')

  var abonelog = await db.fetch(`kayıtlog_${message.guild.id}`);
let abonelogs = message.guild.channels.find("id", abonelog);
  if(!abonelogs) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Abone Log Ayarlanmamış!\n Bilgi İçin: \`a!kayıt-sistemi\``).setColor('#7c02ff'));
  


 if(message.channel.id !== kanal) {
  
  
  
  let hata = new Discord.RichEmbed()
  .setTitle(':x: Hata!')
  .setDescription('Bu komut sadece kayıt kanalında; <#'+kanal+'> Kanalında kullanılabilir.')
  .setThumbnail(message.author.avatarURL)
  .setColor('BLACK')
  message.channel.send(hata).then(s => s.delete(15000))
  return
  }
  
if(!message.member.roles.has(rol)) {
  
  
  
  let hata2 = new Discord.RichEmbed()
  .setTitle(':x: Hata!')
  .setDescription('Bu komutu kullanmak için **'+message.guild.roles.get(rol).name+'** Rolüne sahip olmalısın.')
  .setThumbnail(message.author.avatarURL)
  .setColor('BLACK')
  message.channel.send(hata2).then(s => s.delete(15000))
  return
  }  
  
  //------------------------------------------------KAYIT-----------------------------------------------\\    
  
  
  
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const stg = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir isim girin.")
      if(!yas) return message.channel.send("Bir yaş girin.")
    stg.setNickname(`${nick} | ${yas}`)
   
   
//------------------------------------------------ROL-VERME-----------------------------------------------\\    

  let user = message.mentions.users.first()
  
  
  if(!user) return message.channel.send('**Kaydı Yapılacak** erkek üyeyi belirtin!').then(x => x.delete(10000))
  
  if(user.bot) return message.channel.send('Belirttiğiniz kişi bir bot.').then(x => x.delete(10000))
  
  
 if(message.guild.members.get(user.id).roles.has(kızrol)) return message.reply('Bu kullanıcı zaten erkek olarak kaydedilmiş.') 
  
 
 let tamamdır = new Discord.RichEmbed()
  .setDescription(`• Kayıt Eden: <@${message.author.id}>
                     • Kayıt Edilen: ${member}
                     • Yeni İsim: \`${nick} | ${yas}\` 
                     • Kayıt Edilen Kanal: ${message.channel.name}`) .setColor('GREEN') 
 .setThumbnail(message.guild.iconURL) 
 .setFooter(client.user.username + ' Kayıt Sistemi') 
message.channel.send(tamamdır).then(s => {

  message.guild.members.get(user.id).addRole(kızrol)
  message.guild.members.get(user.id).removeRole(kayıtsız)
})
 let tamamdırr = new Discord.RichEmbed()
  .setDescription(`• Kayıt Eden: <@${message.author.id}>
                     • Kayıt Edilen: ${member}
                     • Yeni İsim: \`${nick} | ${yas}\` 
                     • Kayıt Edilen Kanal: ${message.channel.name}`) .setColor('GOLD') 
 .setThumbnail(message.guild.iconURL) 
 .setFooter(client.user.username + ' Kayıt Sistemi') 
abonelogs.send(tamamdırr)
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["e"], 
  permLevel: 0
};

exports.help = {
  name: 'erkek',
  description: 'taslak', 
  usage: 'erkek'
};
