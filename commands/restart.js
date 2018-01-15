module.exports.run = async (client, message, args) => {
    const Discord = require('discord.js');

    if(message.author.id !== require('../config.json').ids.akii) return message.channel.send(":x: This command is limited to Akii only!");

    message.channel.send(":gear: **Bot is restarting...**");
    require('child_process').exec('pm2 restart main', (e, out, err) => {
        client.users.get("107599228900999168").send(`:white_check_mark: **Bot has restarted**`);
    });
};