module.exports.run = (client, message, args) => {
  console.log(`reloadE command`);
  if (message.author.id === `107599228900999168`) {
    if (!args || args.size < 1) return message.reply(`Must provide a event name to reload.`);
    // the path is relative to the *event folder*, so just ./filename.js
    try {
      delete require.cache[require.resolve(`../events/${args[0]}.js`)];
      message.reply(`The event ${args[0]} has been reloaded`);
      console.log(`The event ${args[0]} has been reloaded`);
    } catch (err) {
      message.channel.send(`:x: \`${err}\``);
      console.debug(`Error in reloadE command: \n${err.stack}`);
      return;
    }
  } else message.channel.send(`:x: This command is restricted to Akii only.`);
};