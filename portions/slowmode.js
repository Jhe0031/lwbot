const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const talkedRecently = new Set();
var talkedRecLock = false;
var slowmode = 2500;

client.on('ready', () => console.log('Slowmode portion ready'));

client.on('message', message => {
    if (talkedRecently.has(message.author.id) && talkedRecLock === true) return message.delete();
    talkedRecently.add(message.author.id);
    setTimeout(() => {
        talkedRecently.delete(message.author.id);
    }, slowmode);
    
    if(message.author.bot || !message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    
    var modRole = message.guild.roles.find('name', 'Mods');
    if(message.content.startsWith(`${prefix}slowmode`)){
        if(message.member.roles.has(modRole.id) || message.author.id === require('./config.json').akiiID){
            if(isNaN(args[1])) return message.channel.send(`:x: ${args[1]} is not a number!`);
            talkedRecLock = true;
            slowmode = args[1]*1000;
            message.channel.send(`:white_check_mark: Slowmode has been set to ${args[1]}!`);
        }
    }

    if(message.content === `${prefix}slowoff`){
        if(message.member.roles.has(modRole.id) || message.author.id === require('./config.json').akiiID){
            talkedRecLock = false;
            slowmode = 0;
            message.channel.send(':white_check_mark: Slowmode has been turned off!');
        } else return message.channel.send(':x: You do not have access to this command!');
    }
})

client.login(token);