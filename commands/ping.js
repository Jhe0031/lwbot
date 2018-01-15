const Discord = require('discord.js');

module.exports.run = (client, message) => {
    message.channel.send("Pinging...").then(thismessage => {
        thismessage.delete();
        message.channel.send(new Discord.RichEmbed()
    .addField(":ping_pong: Pong!", Math.round(client.ping)+"ms", false)
    .addField(":left_right_arrow: Latency:", `${thismessage.createdAt-message.createdAt}ms`)
    .setColor(54371)
);
    });
};