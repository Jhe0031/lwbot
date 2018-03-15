module.exports.run = async (client, message) => {
  if (message.author.id !== require(`../config.json`).ids.akii) return message.channel.send(`:x: This command is limited to Akii only!`);

  message.channel.send(`:gear: **Bot is restarting...**`);
  require(`child_process`).exec(`pm2 restart main`, () => {
    console.log(`Bot has finished restarting`);
  });
};