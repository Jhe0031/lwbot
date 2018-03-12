module.exports.run = (client, message, args) => {
    if(!message.guild.me.permissions.has('KICK_MEMBERS')) return message.channel.send(`:x: I do not have access to kick members!`);
    if(!message.member.kickable) return message.channel.send(`:x: I could not kick you!`);

    message.member.kick('Self kick');
    message.channel.send('**Kicked**');
};