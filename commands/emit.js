module.exports.run = (client, message, args) => {
    if(message.author.id !== "107599228900999168") return;
    else {client.emit(args[0], args[1])}
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 'Bot Owner'
};

exports.help = {
    name: 'emit',
    description: 'client.emit(<event>)',
    usage: 'emit <event>',
    category: 'System'
}
