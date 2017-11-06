module.exports = async (client, msg) => {
    if (!msg.guild || msg.author.bot) return;
    const prefix = client.config.prefix
    if (!msg.content.startsWith(prefix)) return;

    const args = msg.content.slice(prefix.length).trim().split(/ + /g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);
    if (!cmd) return;

    await cmd.run(client, msg, args);
};