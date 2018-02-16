exports.run = (client, message, args) => {
    const config = require('../config.js');
    const Discord = require('discord.js');

    var giphy = require('giphy-api')(config.giphy);

    let sweetheart = message.mentions.users.first();

    message.guild.member(sweetheart).id;

    giphy.random({
        tag: 'kiss sexy kissing hot makeout',
        limit: 1,
        rating: 'pg',
        fmt: 'json'
    }).then(function(res) {
        var myArray = ['snogging', 'sucking face', 'getting intimate', 'kissing', 'in a loving embrace'];
        var words = myArray[Math.floor(Math.random() * myArray.length)];
        
        message.channel.sendEmbed(new Discord.RichEmbed()
            .setTitle(message.author.username + " and " + sweetheart.username + " are " + words + ' give em a bit of privacy💏❤️')
            .setImage(res.data.image_url)
        );
    });
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['makeout', 'smooch'],
    permLevel: 'User'
};

exports.help = {
    name: 'kiss',
    description: 'Kiss someone ️️️️️️️️️️❤️',
    category: 'Fun',
    usage: 'kiss <mention>'
};