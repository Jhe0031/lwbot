module.exports.run = async (client, message, args) => {
    try {
    const Discord = require('discord.js');

    if(message.member.roles.has("382591919772925962")){
        var date = new Date();

        String.prototype.replaceAll = function(search, replacement) {
            var target = this;
            return target.replace(new RegExp(search, 'g'), replacement);
        };
        
        const messageContent = args.join(' ');
        const splitter = messageContent.split(" | ");
        var title = splitter[0];
        var part2 = splitter[1];
        var cmdargs = splitter[2];

        if(!title) return message.channel.send(`:x: Missing a title!`);
        if(!part2) return message.channel.send(`:x: Missing the content!`);
        var content = part2.replaceAll('/n', '\n').trim();
        
        if(splitter[2]) if(splitter[2].includes('no-subs')){announce(); message.channel.send(`:white_check_mark: **Announcement sent!**\n**Args:** \`${cmdargs}\``) } else return;
        else {message.guild.channels.get('382642103626498049').send(`<@&383439861463515136>`); announce(); message.channel.send(`:white_check_mark: **Announcement sent!**`)}

        function announce(){
            message.guild.channels.get('382642103626498049').send(new Discord.RichEmbed()
                .setColor(54371)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setFooter(`${date.getHours()}:${date.getMinutes()} • ${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`)
                .addField(title, content)
            );
        }
    } else message.channel.send(":x: You do not have access to this command!");
} catch (err) {message.channel.send(`:x: ${err}`)}
}

//<@&383439861463515136> anno subs role