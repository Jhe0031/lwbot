module.exports.run = (client, message) => {
    const Discord = require(`discord.js`);

    var hours = (Math.round(client.uptime / (1000 * 60 * 60)));
    var days = (Math.floor(hours / 24)); 
    var finHours = (hours - days * 24); 
    var minutes = (Math.round(client.uptime / (1000 * 60)) % 60);
    var seconds = (Math.round(client.uptime / 1000) % 60);

    message.channel.send(new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .addField(`Uptime:`, `${days} days, ${finHours} hours, ${minutes} minutes, ${seconds} seconds`)
        .addField(`Ping:`, `${Math.round(client.ping)}ms`)
        .setColor(`0x59D851`)
    );
};