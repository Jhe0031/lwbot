const { Discord, Client } = require('discord.js');
const client = new Client();

client.on('ready', () => console.log('Relay ready!'));

client.on('message', async message => {
    if (message.author.bot) return undefined;

    var name = message.member.nickname || message.author.username
    
    if(message.channel.id === "382585019300053015" && message.content.startsWith('')){
        client.channels.get('408801065949986827').send(`${name} >> ${message.content}`);
    }

    if(message.channel.id === "408801065949986827" && message.content.startsWith('')){
        message.delete();
        client.channels.get('382585019300053015').send(`${message.content}`);
    }
});

client.login(require('config.json').token);