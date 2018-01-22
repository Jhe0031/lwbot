module.exports.run = async (client, message, args) => {
    try {
        const ytdl = require('ytdl-core');
        
        const voiceChannel = message.member.voiceChannel;
        if(!voiceChannel) return message.channel.send(`:x: You must be in a voice channel!`);
        const permissions = voiceChannel.permissionsFor(message.client.user)
        if(!permissions.has('CONNECT')) return message.channel.send(`:x: I can't connect! Missing Permissions!`);
        if(!permissions.has('SPEAK')) return message.channel.send(`:x: I cannot speak in this channel! Missing Permissions!`);

        var connection = await voiceChannel.join();

        if(args[0] === 'stop'){
            if(!message.member.voiceChannel) message.channel.send('You are not in a voice channel!');
            message.member.voiceChannel.leave();
            return undefined;
        }
        
        const dispatcher = connection.playStream(ytdl(args[0]))
            .on('end', () => {message.channel.send('Song Ended'); voiceChannel.leave();})
            .on('error', error => {message.channel.send(`:x: ${error}`); console.error(error)});
        dispatcher.setVolumeLogarithmic(5 / 5);
        
    } catch (err) {message.channel.send(`:x: ${err}`); console.log(err)}
}