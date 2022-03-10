  const Discord = require('discord.js');
exports.run = (client, message, args) => {

  let every = message.guild.roles.find(r => r.name === '@everyone')
message.channel.overwritePermissions(every, {
  'SEND_MESSAGES': true,
 
})
 

   message.channel.send('Sohbet kanalı ``Yazılabilir`` durumuna getirildi.');
}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kanalaç"],
kategori: 'sohbet',
  permLevel: 3
};

exports.help = {
  name: 'kanal-aç',
  description: 'Sohbetinizi açmaya yarar.',
  usage: 'aç'
};
