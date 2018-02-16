module.exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    try {
        if(message.member.hasPermission("MANAGE_EMOJIS")){
        var emojiName = args[0];
        var emojiURL = args[1];

        if(!emojiName) return message.channel.send(":x: You forgot the emoji name!");
        if(!emojiURL) return message.channel.send(":x: You forgot the emoji url!");

        message.guild.createEmoji(args[1], args[0], null, `${message.author.tag} created emoji ${args[0]}`)
        .then(emote => {
            message.channel.send(`:white_check_mark: Emote **\`${emote.name}\`** ${emote} created!`);
        })
        .catch((err) => {message.channel.send(`Something went wrong:\n${err}`);})
       
        } else message.channel.send(':x: Missing Permission: `Manage Emojis`');
    } catch (err) {message.channel.send(`:x: Something went wrong: ${err}`)}
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['aE'],
    permLevel: 'User'
    //The permLevel set to 'User' is intentional, the actual command will take care of permissions
  };
  
  exports.help = {
    name: "addEmote",
    category: "System",
    description: "Adds an emote to the server [Requires `Manage Emojis`]",
    usage: "addEmote <name> <url>"
};