module.exports.run = (client, message, args) => {
const Discord = require('discord.js');
const sql = require("sqlite");//DO NOT TOUCH SAMIR.
const FeedMe = require('feedme');
const http = require('http');
sql.open("./commands/database/Webtoon.sqlite");//DO Not TOUCH SAMIR

let nameCall = message.content.split(' ')[1]

sql.get(`SELECT * FROM Webtoon WHERE name ="${nameCall}"`).then(row => {
if(!row){
    message.channel.send(new Discord.RichEmbed()
    .setTitle(":x: No Webtoon with that name exists")
    .setColor(54371)
);
return;
}
const rssCall = row.rsslink;
const colour = row.colour

http.get(rssCall, (res) => {
    var parser = new FeedMe(true);
    res.pipe(parser);
    parser.on('end', () => {
        const data = parser.done();

        message.channel.send(new Discord.RichEmbed()
                       .setColor(colour)
                       .setAuthor(data.items[0].author, data.image.url, null)
                       .addField("Title:", data.title, true)
                       //.addField("Updates:", "EVERYDAY", true)
                       .addField("Summary:", `*${data.description}*`, true)
                       .addField("URL:", `[Click Here](${data.link})`, true)
                       .setThumbnail(data.image.url)
                   );
               });
           });
});

}
