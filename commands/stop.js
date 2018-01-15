module.exports.run = async (client, message, args) => {
    const Discord = require('discord.js');
    var ids = [require('../config.json').ids.akii, require('../config.json').ids.nen]

    if(message.author.id !== ids.some) return message.channel.send(":x: This command is limited to Akii & Nen only!");

    message.channel.send(":gear: **Bot is shutting down...**");
    require('child_process').exec('pm2 stop main', (e, out, err) => {
        console.log('Bot has been stopped');
    });
};