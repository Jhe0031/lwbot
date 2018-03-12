module.exports.run = (client, message, args) => {
    if(!message.guild.me.permissions.has('BAN_MEMBERS')) return message.channel.send(`:x: I do not have access to ban members!`);
    if(!message.member.kickable) return message.channel.send(`:x: I could not ban you!`);

    message.member.ban('Self ban');
    message.channel.send('**Banned**');
};