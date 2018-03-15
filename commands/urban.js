const ud = require(`urban-dictionary`);
const Discord = require(`discord.js`);
module.exports.run = (client, message, args) => {
  var definition = args[0];

  if (!definition) return message.channel.send(`:x: You forgot a word to look up!`);

  ud.term(definition, function(error, entries) {
    if (error) {
      if (error) message.channel.send(`:x: I couldn't find ${definition}`);
    } else {
      message.channel.send(new Discord.RichEmbed()
        .addField(entries[0].word, entries[0].definition, true)
        .addField(`Example:`, `*${entries[0].example}*`)
        .setColor(54371)
      );
    }
  });
};