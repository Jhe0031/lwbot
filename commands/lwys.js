const Discord = require('discord.js');
const fs = require('fs');
const authorData = require('../wtData/authors/shen.json');
const webtoonData = require('../wtData/webtoons/lwys.json');
const path = require('path');

module.exports.run = (client, message, args) => {
            if(args[0] === ""){
            message.channel.send(new Discord.RichEmbed()
                  .setColor(54371)
                  .setAuthor(authorData.name, authorData.avatar, null)
                  .addField("Title:", webtoonData.title, true)
                  .addField("Author:", webtoonData.author, true)
                  .addField("Updates:", webtoonData.updates, true)
                  .addField("Summary:", `*${webtoonData.summary}*`, true)
                  .addField("URL:", `[Click Here](${webtoonData.URL})`, true)
                  .setThumbnail(webtoonData.avatar)
            );
      }
      if(args[0] === "set"){
            const modRole = message.guild.roles.find("name", "Mods");
            if (!message.member.roles.has(modRole.id)){
                  message.reply("You can't use this command.");
            } else {
                  if(args[1] === "title"){
                        console.log("I'm gonna change this. Just pushing it tho lmao");
                  }
            }
      }
};