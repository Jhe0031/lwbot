module.exports.run = async (client) => {
    console.log(`Bot is online`);
    client.channels.get(`389550821584666628`).send(`hello hello i'm online ;D`);

    // Sets the "Current total members" message in #rules_and_info
    var guild = client.guilds.get(`382585019300053013`);
    var bots = guild.members.filter(member => member.user.bot).map(g => g.toString());
    guild.channels.get(`382640041358262285`).fetchMessage(`423594731994611723`).then(msg => msg.edit(`:busts_in_silhouette: **Current total members: \`${guild.memberCount-bots.length}\`**`));

    // All of the playing statuses the bot cycles through every 15 seconds
    var playings = [
        [`with Shin-Ae`, {type: `PLAYING`}], 
        [`with James`, {type: `PLAYING`}], 
        [`with Nen`, {type: `PLAYING`}], 
        [`with fire`, {type: `PLAYING`}], 
        [`on Webtoons instead of working`, {type: `PLAYING`}], 
        [`with your heart`, {type: `PLAYING`}], 
        [`with Shen`, {type: `PLAYING`}], 
        [`with SAI`, {type: `PLAYING`}], 
        [`some game or something idrk`, {type: `PLAYING`}], 
        [`with the big boys`, {type: `PLAYING`}], 
        [`with Madi`, {type: `PLAYING`}], 
        [`in Webtoonland`, {type: `PLAYING`}], 
        [`in Wonderland`, {type: `PLAYING`}], 
        [`Adobe Illustrator`, {type: `PLAYING`}], 
        [`Fire Alpaca`, {type: `PLAYING`}], 
        [`for the money`, {type: `PLAYING`}], 
        [`YAAAASSSSS`, {type: `PLAYING`}], 
        [`with my code`, {type: `PLAYING`}], 
        [`with time`, {type: `PLAYING`}], 
        [`in space`, {type: `PLAYING`}], 
        [`for the good guys`, {type: `PLAYING`}], 
        [`with other bots`, {type: `PLAYING`}], 
        [`with the ratelimit ;)`, {type: `PLAYING`}], 
        [`with the Podcast crew`, {type: `PLAYING`}], 
        [`[status]`, {type: `PLAYING`}], 
        [`[object Object]`, {type: `PLAYING`}], 
        [`against the clock`, {type: `PLAYING`}], 
        [`Error 503: Forbidden`, {type: `PLAYING`}], 
        [`with your ships`, {type: `PLAYING`}], 
        [`Monopoly`, {type: `PLAYING`}], 
        [`with life in a box`, {type: `PLAYING`}], 
        [`with life`, {type: `PLAYING`}], 
        [`with the other lurkers`, {type: `PLAYING`}], 
        [`with the skin of my enemies`, {type: `PLAYING`}], 
        [`for the glory`, {type: `PLAYING`}], 
        [`with friends`, {type: `PLAYING`}], 
        [`on the beach`, {type: `PLAYING`}], 
        [`at the mall`, {type: `PLAYING`}], 
        [`at home`, {type: `PLAYING`}], 
        [`on the couch`, {type: `PLAYING`}], 
        [`?¿`, {type: `PLAYING`}], 
        [`devil's advocate`, {type: `PLAYING`}], 
        [`Poker`, {type: `PLAYING`}], 
        [`MS Paint`, {type: `PLAYING`}], 
        [`with Kowoks`, {type: `PLAYING`}], 
        [`with Uru-chan`, {type: `PLAYING`}], 
        [`with Quimchee`, {type: `PLAYING`}], 
        [`with Chris McCoy @ Safely Endangered`, {type: `PLAYING`}], 
        [` `, {type: `PLAYING`}],
        [`Netflix`, {type: `WATCHING`}],
        [`you`, {type: `WATCHING`}],
        [`Spotify`, {type: `LISTENING`}]
    ];

    Array.prototype.randomElement = function(array) {
        return array[Math.floor(Math.random() * array.length)];
    };

    setInterval(() => {
        var randomPl = playings.randomElement(playings);
        client.user.setActivity(randomPl[0], randomPl[1]);
    }, 15000);
};
