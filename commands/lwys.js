const Discord = require('discord.js');
const fs = require('fs');
const authorData = require('../wtData/authors/shen.json');
const webtoonData = require('../wtData/webtoons/lwys.json');

module.exports.run = (client, msg, args) => {
      
      msg.channel.send(new Discord.RichEmbed()
            .setColor(54371)
            .setAuthor(authorData.name, authorData.avatar, null)
            .addField("Title:", webtoonData.name, true)
            .addField("Author:", webtoonData.author, true)
            .addField("Updates:", webtoonData.updates, true)
            .addField("Summary:", `*${webtoonData.summary}*`, true)
            .addField("URL:", `[Click Here](${webtoonData.URL})`, true)
            .setThumbnail(webtoonData.avatar)
      );

};

module.exports.conf = {
      name: "lwys"
}