const {RichEmbed} = require("discord.js");
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message, args, level) => {

if(message.author.id !== ayarlar.sahip) 
if(message.author.id !== ayarlar.sahip2) 
return message.reply(`bu komutu sadece Bot Sahibleri kullanabilir!`);
  
  let embed = new RichEmbed()
  .setColor("GREEN")
  .setTitle("Bot yeniden başlatılıyor.......")
  await message.channel.send(embed); 
  
  
  console.log("Bot yeniden başlıyor...");

  
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  });

 
  process.exit(1);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reset", "yenile", "yenşden-başlat","yb"],
  permLevel: 0
};

exports.help = {
  name: "reboot",
  description: "Botu yeniden başlatır.",
  usage: "d!reboot"
};