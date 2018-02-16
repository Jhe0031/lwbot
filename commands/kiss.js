exports.run = (client, message, args) => {
<<<<<<< HEAD
    const config = require('../config.js');
=======
    const config = require('../config.json');
>>>>>>> a8ede0d4f86bf40e330da9c62bf94d79356cd019
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
<<<<<<< HEAD
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
=======
>>>>>>> a8ede0d4f86bf40e330da9c62bf94d79356cd019
};