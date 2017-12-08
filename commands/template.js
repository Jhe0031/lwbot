const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
  const FeedMe = require('feedme');
  const http = require('http');
  
  http.get('http://www.webtoons.com/en/drama/my-boo/rss?title_no=1185', (res) => {
      var parser = new FeedMe(true);
      res.pipe(parser);
      parser.on('end', () => {
          const data = parser.done();

          message.channel.send(new Discord.RichEmbed()
          .setColor(54371)
          .setAuthor(data.items[0].author, data.image.url, data.link)
          .addField("Title:", data.title, true)
          .addField("Updates:", "COMPLETED", true)
          .addField("Summary:", `*${data.description}*`, true)
          .addField("URL:", `[Click Here](${data.link})`, true)
          .setThumbnail(data.image.url)
      );
  });
});
};