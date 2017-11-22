module.exports.run = (client, message, args) => {
    var FeedParser = require('feedparser');
    var request = require('request'); // for fetching the feed
     
    var req = request('http://www.webtoons.com/en/drama/my-boo/rss?title_no=1185')
    var feedparser = new FeedParser([options]);
     
    req.on('error', function (error) {
      console.log('There was an error parsing the rss feed.' + error.stack);
    });
     
    req.on('response', function (res) {
      var stream = this; // `this` is `req`, which is a stream
     
      if (res.statusCode !== 200) {
        this.emit('error', new Error('Bad status code'));
      }
      else {
        stream.pipe(feedparser);
      }
    });
     
    feedparser.on('error', function (error) {
        console.log('There was an error parsing the rss feed.' + error.stack);
    });
     
    feedparser.on('readable', function () {
      // This is where the action is!
      var stream = this; // `this` is `feedparser`, which is a stream
      var meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
      var item;
     
      while (item = stream.read()) {
        console.log(item);
      }
    });
    
}