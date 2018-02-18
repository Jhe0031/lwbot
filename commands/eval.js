const { inspect } = require(`util`);
const hastebin = require(`hastebin-gen`);

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const code = args.join(` `);
    const token = client.token.split(``).join(`[^]{0,2}`);
    const rev = client.token.split(``).reverse().join(`[^]{0,2}`);
    const filter = new RegExp(`${token}|${rev}`, `g`);
    if (message.author.id !== `107599228900999168`) return;
    try {
        let output = eval(code);
        if (output instanceof Promise || (Boolean(output) && typeof output.then === `function` && typeof output.catch === `function`)) output = await output;
        output = inspect(output, { depth: 0, maxArrayLength: null });
        output = output.replace(filter, `[TOKEN]`);
        output = clean(output);
        await message.channel.send(`\`\`\`js\n${output}\n\`\`\``).catch(() => {
            try {
                hastebin(output, `js`).then(r => {
                    message.channel.send(`:warning: **Output > 2000 characters; uploaded to Hastebin:** ${r}.`);
                });
            } catch (error) {
                message.channel.send(`:x: **Hastebin upload error:** ${error.name}: ${error.message}`);
            }
        });
    } catch (error) {
        message.channel.send(`The following error occured \`\`\`js\n${error.stack}\`\`\``);
    }

    function clean(text)  {
        return text
            .replace(/`/g, `\`` + String.fromCharCode(8203))
            .replace(/@/g, `@` + String.fromCharCode(8203));
    }
};
