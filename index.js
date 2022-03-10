const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');
const express = require('express');
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const queue = new Map();  
const ytdl = require('ytdl-core');
const db = require('quick.db')
const moment = require('moment');
const ms = require('parse-ms');
require('moment-duration-format')
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

////////KOMUTLAR BURDAN SONRA



client.login(ayarlar.token);

//-------------—------------—---—————-------KOMUTLAR-----------------------------------------//

 ////m DM LOGS

client.on("message", message => {
  if (message.channel.type === "dm") {
    if (message.author.bot) return;
    const dmlog = new Discord.RichEmbed()
      .setTitle(`${client.user.username}'a Özelden Mesaj Gönderildi!`)
      .setColor("RANDOM")
      .addField("Mesajı Gönderen", ` \`\`\` ${message.author.tag} \`\`\` `)
      .addField("Mesajı Gönderenin ID", ` \`\`\`${message.author.id}\`\`\` `)
      .addField(`Gönderilen Mesaj`, message.content)
      .setThumbnail(message.author.avatarURL);
    client.channels.get("808002106052444250").send(dmlog);
  }
});


/////////////////CHAT LOG///////////////////////

client.on("messageDelete", async message => {
  if (message.author.bot) return;

  var ech = message.author;

  var kanal = await db.fetch(`chatlog_${message.guild.id}`);
  if (!kanal) return;
  var kanalbul = message.guild.channels.find("name", kanal);

  const chatembed = new Discord.RichEmbed()
    .setTitle('Awand Mod Log Sistemi')
    .addField("Sildiği Kanal",message.channel)
    .setColor("RANDOM")
    .setAuthor(`Bir Mesaj Silindi!`, ech.avatarURL)
    .addField("Kullanıcı Tag", ech.tag, true)
    .addField("ID", ech.id, true)
    .setDescription('')
    .addField("Silinen Mesaj", "```" + message.content + "```")
    .setThumbnail(ech.avatarURL);
  
  kanalbul.send(chatembed);
});

client.on("messageUpdate", async (oldMsg, newMsg) => {
  if (oldMsg.author.bot) return;

  var ech = oldMsg.author;

  var kanal = await db.fetch(`chatlog_${oldMsg.guild.id}`);
  if (!kanal) return;
  var kanalbul = oldMsg.guild.channels.find("name", kanal);

  const chatembed = new Discord.RichEmbed()
    .setTitle('Awand Mod Log Sistemi')
    .setColor("RANDOM")
    .setAuthor(`Bir Mesaj Düzenlendi!`, ech.avatarURL)
    .addField("Düzenlediği Kanal",newMsg.channel)
    .addField("Kullanıcı Tag", ech.tag, true)
    .addField("ID", ech.id, true)
    .addField("Eski Mesaj", "```" + oldMsg.content + "```")
    .addField("Yeni Mesaj", "```" + newMsg.content + "```")
    .setThumbnail(ech.avatarURL);
  kanalbul.send(chatembed);
});



////////OTO ROL/////////////////

client.on('guildMemberAdd', async (member, guild, message) => {
let role = await  db.fetch(`otorol_${member.guild.id}`)
 let otorol = await db.fetch(`otorol_${member.guild.id}`)
 let i = await db.fetch(`otolog_${member.guild.id}`)
 if (!otorol || otorol.toLowerCase() === 'yok') return;
else {
 try {
 

  if (!i) return
console.log()
  member.addRole(member.guild.roles.get(otorol))
                        var embed = new Discord.RichEmbed()
                        .setDescription(`**Sunucuya Yeni Katılan** \`${member.user.tag}\` **Kullanıcısına Otomatik Rol verildi.**`)
                        .setColor('0x36393E') 
                        .setFooter(`Otorol Sistemi`)
     member.guild.channels.get(i).send(embed)  } catch (e) {
 console.log(e)
}
}

});



///////// Küfür engel //////
client.on("message", async msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
        
    let i = await db.fetch(`küfürFiltre_${msg.guild.id}`)  
          if (i == 'acik') {
              const küfür = ["orospu cocu","amk","amcık", "yarrak", "orospu","piç", "sikerim", "sikik", "amına", "pezevenk", "yavşak", "ananı", "anandır", "orospu", "evladı", "göt", "pipi", "sokuk", "yarak", "bacını", "karını","orospu çocuğu","orospu evladı","aq","amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
              if (küfür.some(word => msg.content.toLowerCase().includes(word))) {
                try {
                  if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) {
                    msg.delete();                    
                    return msg.channel.send(`${msg.author}, Küfür Etmek Yasak!`).then(msg => msg.delete(25000));
                  }              
                } catch(err) {
                  console.log(err);
                }
              }
          }
          if (!i) return;
          });


//--------------------------------SA - AS -----------------------------------------\\

client.on("message", async message => {
  let a = await db.fetch(`saas_${message.guild.id}`)
  if (a) {
      if (message.content.toLowerCase() === "sa") {
       message.channel.send("Aleyküm Selam, Hoşgeldin Dostum <a:mavikalp:752051026839863427>")
      }
          if (message.content.toLowerCase() === "selam") {
       message.channel.send("Aleyküm Selam, Hoşgeldin Dostum <a:mavikalp:752051026839863427>")
      }
          if (message.content.toLowerCase() === "selamın aleyküm") {
        message.channel.send("Aleyküm Selam, Hoşgeldin Dostum <a:mavikalp:752051026839863427>")
      }
          if (message.content.toLowerCase() === "selamun aleyküm") {
       message.channel.send("Aleyküm Selam, Hoşgeldin Dostum <a:mavikalp:752051026839863427>")

      }
  }
  
  
})

//--------------------------------SA - AS -----------------------------------------\\


/////KANAL KORUMA/////

client.on("channelDelete", async function(channel) {
    let rol = await db.fetch(`kanalk_${channel.guild.id}`);
  
  if (rol) {
const guild = channel.guild.cache;
let channelp = channel.parentID;

  channel.clone().then(z => {
    let kanal = z.guild.channels.find(c => c.name === z.name);
    kanal.setParent(
      kanal.guild.channels.find(channel => channel.id === channelp)
    );
  });
  }
})

/////////CAPS LOCK////////

 client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 2) {
    if (db.fetch(`capslock_${msg.guild.id}`)) {
      let caps = msg.content.toUpperCase();
      if (msg.content == caps) {
          if (!msg.mentions.users.first()) {
            msg.delete();
            return msg.channel.send(`${msg.member}, Capslock Kapat Lütfen!`).then(awand => awand.delete(7500))
              
          }
      
      }
    }
  }
});

/////// ROL KORUMA /////

client.on("roleDelete", async(role , channel , message , guild) => {
  let rolkoruma = await db.fetch(`rolk_${role.guild.id}`);
    if (rolkoruma == "acik") {
  role.guild.createRole({name: role.name, color: role.color,  permissions: role.permissions}) 
        role.guild.owner.send(` **${role.name}** Adlı Rol Silindi Ve Ben Rolü Tekrar Oluşturdum  :white_check_mark:`)

  
}
})  



////////// tag 

client.on("message", async message => {
  let tag = await db.fetch(`tag_${message.guild.id}`);
  if (tag) {
      if (message.content.toLowerCase() === "!tag") {
       message.channel.send(`${tag}`)
      }
          if (message.content.toLowerCase() === "tag") {
       message.channel.send(`${tag}`)
      }
          if (message.content.toLowerCase() === "a!tag") {
       message.channel.send(`${tag}`)
      }

  }


})

///////////////////////
