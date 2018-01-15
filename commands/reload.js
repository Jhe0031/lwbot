module.exports.run = async (client, message, args, akiiClient) => {
    console.log("reload command run");
    if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
    await delete require.cache[require.resolve(`./${args[0]}.js`)];
    await message.reply(`The command ${args[0]} has been reloaded`);
    await console.log(`The command ${args[0]} has been reloaded`);

    // This little module here sends the command to Akii, then the akiiClient copies that command and pastes it into the general channel of the akiibot debug server
    await message.channel.send(`:gear: **Running command ${args[0]}...**`);
    client.users.get("107599228900999168").send(`!w ${args[0]}`);
    
  };