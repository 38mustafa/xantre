const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log('[------------] Xantre Bots [-------------]');
  console.log(`${client.guilds.size.toLocaleString()} adet sunucuya hizmet veriyor`);
  console.log(`${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} kullaniciya hizmet veriyor`);
  console.log(`${client.channels.size.toLocaleString()} kanala hizmet veriyor`);
  console.log("Prefix: " + prefix);
  console.log("Bot ID'si: " + client.user.id);
  console.log("Bot Isim: " + client.user.username);
  console.log('[------------] Xantre Bots [-------------]'); 
client.user.setStatus("online"); //dnd = rahatsız etmeyin - idle = boşta - online = çevrimiçim

setInterval(function() {

client.user.setActivity(`${prefix}yardım | `+ client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +` Kişiye Teşekkürler ! | `+ client. guilds.size.toLocaleString() + ` Sunucuya Teşekkürler !`);
}, 2 * 2500);
}

