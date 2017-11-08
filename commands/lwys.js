const Discord = require(‘discord.js’);

var authorName = ""
var authorAva = ""

module.exports.run = (client, msg, args) => {
      msg.channel.send(new Discord.RichEmbed()
            .setAuthor(authorName, authorAva)
)
};

module.exports.conf = {
      name: “lwys”
}