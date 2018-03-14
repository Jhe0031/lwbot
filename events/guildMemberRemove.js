module.exports.run = client => {
    var guild = client.guilds.get(`382585019300053013`);
    var bots = guild.members.filter(member => member.user.bot).map(g => g.toString());
  
    guild.channels.get(`382640041358262285`).fetchMessage(`423594731994611723`).then(msg => msg.edit(`:busts_in_silhouette: **Current total members: \`${guild.memberCount-bots.length}\`**`));
};