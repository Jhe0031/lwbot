module.exports.run = (client, message, args) => {
    console.log("reload command");
    if(message.author.id === "107599228900999168"){
    if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
    // the path is relative to the *current folder*, so just ./filename.js
    try {
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    message.reply(`The command ${args[0]} has been reloaded`);
    console.log(`The command ${args[0]} has been reloaded`);
    } catch (err) {
        message.channel.send(`:x: \`${err}\``);
        console.debug(`Error in reload command: \n${err.stack}`);
        console.log("THE ABOVE IS NOT AN ERROR. IT IS DEBUG INFORMATION");
        return;
    }
} else message.channel.send(":x: This command is restricted to Akii only.");
  };