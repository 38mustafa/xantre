const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

if(message.guild.owner.id !== message.author.id) return message.channel.send("Bu komutu sadece sunucu sahibi kullanabilir.")
  if (!args[0]) return message.channel.send(`Küfür Filtresini Ayarlamak İçin \`a!küfür aç\` | Kapatmak İstiyorsanız \`a!küfür kapat\` Yazabilirsiniz`)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`Küfür Filtresini Ayarlamak İçin \`a!küfür aç\` | Kapatmak İstiyorsanız \`a!küfür kapat\` Yazabilirsiniz`)

    if (args[0] == 'aç') {
    db.set(`küfürFiltre_${message.guild.id}`, 'acik')
    let i = await db.fetch(`küfürFiltre_${message.guild.id}`)
  message.channel.send(`Küfür Filtresi Başarıyla Açtım.`)    
     
  } 

  if (args[0] == 'kapat') {
    
    let üye = await db.fetch(`küfürFiltre_${message.guild.id}`)
    if (!üye) return message.channel.send(`Küfür filtresini açtığına emin misin?.`)
    
    
    db.delete(`küfürFiltre_${message.guild.id}`)
    
    message.channel.send(`Küfür Filtresini Kapattım.`)
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['küfürengel','küfür', 'küfür-filtresi', 'küfürfiltresi', 'küfür-filtre', 'küfürfiltre', 'küfür-engel'],
 permLevel: 0
};

exports.help = {
 name: 'küfür',
 description: 'küfür',
 usage: 'gkanal'
};