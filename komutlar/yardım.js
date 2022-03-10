const Discord = require ("discord.js");
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {

const menü = new Discord.RichEmbed()

.setColor("#3475bb")
.setTitle("Xantre Bot")
.setDescription(`

▬▬▬▬▬▬[  **𝐘𝐀𝐑𝐃𝐈𝐌 𝐌𝐄𝐍𝐔**  ]▬▬▬▬▬▬

> **» ${ayarlar.prefix}moderasyon ** : Moderasyon Komutlarını Gösterir.
> **» ${ayarlar.prefix}moderasyon2 ** : Moderasyon2 Komutlarını Gösterir.
> **» ${ayarlar.prefix}kayıt ** : Kayıt Sisteminin Komutlarınını Gösterir.
> **» ${ayarlar.prefix}eğlence ** : Eğlence Komutlarını Gösterir.
> **» ${ayarlar.prefix}güvenlik ** : Güvenlik Komutlarını Gösterir.
> **» ${ayarlar.prefix}abone-yardım ** : Abone Komutlarını Gösterir.

▬▬▬▬▬▬[  **𝐁𝐀𝐆𝐋𝐀𝐍𝐓𝐈𝐋𝐀𝐑**  ]▬▬▬▬▬▬

> **» Botu Davet Etmek için: \`a!davet\` **
> **» Yapım Ekibi için: \`a!yapımekibi\` **
> **» CanlıDestek Bağlantı için: \`a!canlıdestek\` **
> **» Destek Sunucusu İçin [TIKLAYIN](https://discord.gg/KddeTSew7f)** 

\`\`\` Botun Rolünü Roller Kısmında Yukarı Alırsanız Sistemler Rahatça Çalışacaktır. \`\`\`


`)
//.setImage('https://cdn.discordapp.com/attachments/807929543250673674/808291396019814400/XANTRE.gif')
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();


  
  message.channel.send(menü);
};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ['help'], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
};