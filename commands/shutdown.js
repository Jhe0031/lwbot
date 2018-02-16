module.exports.run = async (client, message, args) => {
    const Discord = require('discord.js');

    if(message.author.id !== require('../config.json').ids.akii) return message.channel.send(":x: This command is limited to Akii only!");

    message.channel.send(":gear: **Bot is shutting down...**");
    require('child_process').exec('pm2 stop main', (e, out, err) => {
        console.log('Bot has been stopped');
    });
};