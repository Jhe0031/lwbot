const Discord = require(‘discord.js’);

module.exports.run = (client, msg, args) => {
      msg.channel.send(new Discord.RichEmbed()
            .setAuthor())
};

module.exports.conf = {
      name: “lwys”
}