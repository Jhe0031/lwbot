const Discord = require('discord.js');

module.exports.run = (client, message) => {
    message.channel.send(new Discord.RichEmbed()
        .addField(":ping_pong: Pong!", "Pinging...")
        .addField("left_right_arrow: Latency:", "Pinging...")
        .setColor(54371)
    ).then(thismessage => {
        thismessage.delete();
        message.channel.send(new Discord.RichEmbed()
        .addField(":ping_pong: Pong!", Math.round(client.ping)+"ms")
        .addField(":left_right_arrow: Latency:", `${thismessage.createdAt-message.createdAt}ms`)
        .setColor(54371)
);
    });
};

<<<<<<< HEAD
exports.help = {
  name: "ping",
  category: "Misc",
  description: "It... like... pings. Then Pongs. And it\"s not Ping Pong.",
  usage: "ping"
};
=======
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "ping",
    category: "Miscelaneous",
    description: "It... like... pings. Then Pongs. And it\"s not Ping Pong.",
    usage: "ping"
  };
>>>>>>> a8ede0d4f86bf40e330da9c62bf94d79356cd019
