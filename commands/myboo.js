const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
  const FeedMe = require('feedme');
  const http = require('http');
  
  http.get('http://www.webtoons.com/en/drama/my-boo/rss?title_no=1185', (res) => {
      var parser = new FeedMe(true);
      res.pipe(parser);
      parser.on('end', () => {
          const data = parser.done();
  
          console.log(data.title);
          console.log(data.link);
          console.log(data.description);
          console.log(data.image.url);
          console.log(data.items[0].author);
      });
  });
};