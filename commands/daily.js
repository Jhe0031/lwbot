module.exports.run = (client, message, args, currency) => {
    const Discord = require('discord.js');
    const timeout = new Discord.Collection();

    // First, this must be at the top level of your code, **NOT** in any event!
    const talkedRecently = new Set();
    // Inside your message event, this code will stop any command during cooldown.
    // Should be placed after your code that checks for bots & prefix, for best performance

    if (talkedRecently.has(message.author.id))
        return;

    // Adds the user to the set so that they can't talk for 2.5 seconds
    talkedRecently.add(message.author.id);
        setTimeout(() => {
        // Removes the user from the set after 2.5 seconds
        talkedRecently.delete(message.author.id);
    }, 2500);
};