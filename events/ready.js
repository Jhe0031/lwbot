module.exports.run = async (client) => {
    console.log(`Bot is online`)
    client.channels.get("235920926862999556").send(":white_check_mark: **Bot is online!**");
};