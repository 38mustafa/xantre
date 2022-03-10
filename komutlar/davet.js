const Discord = require('discord.js');
exports.run = async(client, message, args) => {

const davet = new Discord.RichEmbed()
   .addField(`Sunucun İçin Botmu Arıyorsun? İşte Ozaman **Xantre** Sana Göre\n\n**Bot Davet Linki**        `, `[Davet Linkim](https://discord.com/oauth2/authorize?client_id=765974478575763466&scope=bot&permissions=8) `)
   .addField(`Yardımımamı İhtiyacın Var Ne Duruyorsun Destek Sunucumuza Gel\n\n**Destek Sunucumuz Linki**        `, `[Destek Sunucusu](https://discord.gg/PHXZFcQG2q) `)
   .setImage(`https://cdn.discordapp.com/attachments/735070039677468785/740496886384820284/giphy-6.gif`)
.setColor(`#3475bb`)
message.channel.send(davet);

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bot-davet'],
    permLevel: 0
}
exports.help = {
    name: 'davet',
    description: 'İsmini yazdığınız emoji hakkında bilgi verir',
    usage: 'Lütfen Botunuzu Davet Len (XDXD) '
}