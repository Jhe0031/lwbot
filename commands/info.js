const Discord = require(`discord.js`);
module.exports.run = (client, message) => {
  message.channel.send(new Discord.RichEmbed()
    .setColor(`0x59D851`)
    .setAuthor(`LINE WEBTOON Bot`, client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .addField(`Version`, `v${require(`../package.json`).version}`, true)
    .addField(`Library`, `[Discord.js](http://discord.js.org/)`, true)
    .addField(`Creators`, `<@107599228900999168> and <@235920655823011840>`, true)
    .addField(`Honorable Mentions`, `[\`An Idiot's Guide\`](http://anidiots.guide/) - Command handler, eval command, reload command, and so many other things. Thank you *so* much.\n[\`discordjs.guide\`](http://discordjs.guide) - Provided currency system and tagging system. You guys are amazing.\n<@235920655823011840> - Created database to hold every webtoon we put into it, created commands to handle it. Thank you for knowing SQLite`)
  );
};