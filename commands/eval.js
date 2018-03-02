const { inspect } = require(`util`);
const hastebin = require(`hastebin-gen`);

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const code = args.join(` `);
    const token = client.token.split(``).join(`[^]{0,2}`);
    const rev = client.token.split(``).reverse().join(`[^]{0,2}`);
    const filter = new RegExp(`${token}|${rev}`, `g`);
    if (message.author.id !== `107599228900999168`) return;
    let output = eval(code);
    if (output instanceof Promise || (Boolean(output) && typeof output.then === `function` && typeof output.catch === `function`)) output = await output;
    output = inspect(output, { depth: 0, maxArrayLength: null });
    output = output.replace(filter, `[TOKEN]`);
    output = clean(output);
    if (output.length > 2000) return hastebin(output, `js`).then(r => message.channel.send(`Output longer than 2000 characters, posted to Hastebin: ${r}`));
    try {
        await message.channel.send(`\`\`\`xl\n${output}\`\`\``).catch(err => {
            if (err.length > 2000) return hastebin(output, `js`).then(r => message.channel.send(`Error longer than 2000 characters, posted to Hastebin: ${r}`));
            message.channel.send(`\`\`\`xl\n${err}\`\`\``);
        });}
    catch (err) {
        if (err.length > 2000) return hastebin(output, `js`).then(r => message.channel.send(`Error longer than 2000 characters, posted to Hastebin: ${r}`));
        message.channel.send(`\`\`\`xl\n${err}\`\`\``);
    }

    function clean(text)  {
        return text
            .replace(/`/g, `\`` + String.fromCharCode(8203))
            .replace(/@/g, `@` + String.fromCharCode(8203));
    }
};
