const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    const parser = require('rss-parser');
    var options = {
        customFields: {
          item: ['item'],
        }
      }
      parser.parseURL('http://www.webtoons.com/en/drama/my-boo/rss?title_no=1185', options, function(err, parsed) {

        parsed.feed.entries.forEach(function(entry) {
          console.log(entry);
        })
      })

      
};