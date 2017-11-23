module.exports.run = (client, message, args) => {
    const parser = require('rss-parser');
    var options = {
        customFields: {
          feed: ['otherTitle', 'extendedDescription'],
          item: ['coAuthor','subtitle'],
        }
      }
      parser.parseURL('http://www.webtoons.com/en/drama/my-boo/rss?title_no=1185', options, function(err, parsed) {
        console.log(parsed.feed.extendedDescription);
       
        parsed.feed.entries.forEach(function(entry) {
          console.log(entry.coAuthor + ':' + entry.subtitle);
        })
      })
};