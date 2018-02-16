module.exports.run = (client, message, args) => {
    const Discord = require('discord.js');

    var hours = (Math.round(client.uptime / (1000 * 60 * 60)))
    var days = (Math.floor(hours / 24)) 
    var finHours = (hours - days * 24) 
    var minutes = (Math.round(client.uptime / (1000 * 60)) % 60)
    var seconds = (Math.round(client.uptime / 1000) % 60)

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "stats",
  category: "System",
  description: "Gives some useful bot statistics",
  usage: "stats"
};
