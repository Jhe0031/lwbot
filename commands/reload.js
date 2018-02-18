module.exports.run = async (client, message, args) => {
    console.log(`reload command run`);
    if (!args || args.size < 1) return message.reply(`Must provide a command name to reload.`);
    await delete require.cache[require.resolve(`./${args[0]}.js`)];
    await message.reply(`The command ${args[0]} has been reloaded`);
    await console.log(`The command ${args[0]} has been reloaded`);
};