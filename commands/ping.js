const Discord = require('discord.js');

module.exports.run = (client, msg) => {
    msg.channel.send("Pinging...").then(thismessage => {
        thismessage.delete();
        msg.channel.send(new Discord.RichEmbed()
    .addField(":ping_pong: Pong!", Math.round(client.ping)+"ms", false)
    .addField(":heartbeat: Heartbeat:", `${thismessage.createdAt-msg.createdAt}ms`)
    .setColor(54371)
);
    });
};

module.exports.conf = {
    name: "ping"
}