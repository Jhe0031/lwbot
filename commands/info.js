const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    message.channel.send(new Discord.RichEmbed()
        .setThumbnail(client.avatarURL)
        .setColor(54371)
    )
};