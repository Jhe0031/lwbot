module.exports.run = async (client) => {
    console.log(`Bot is online`)
    client.channels.get("382591354427146240").send(":white_check_mark: **Bot is online!**");
};
