module.exports.run = async (client, member, message, args) => {
    await client.channels.get("235920926862999556").send(`<:white_minus:388418662341673014> Aww, **${member.user}** left the server! Guess they couldn't handle the hype..`);
};