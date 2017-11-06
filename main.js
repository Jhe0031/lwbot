const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const { promisify } = require("util");
const readdir = promisify(fs.readdir);

client.commands = new Discord.Collection();
client.config = require("./config.json");

const load = async () => {
    const cmdFiles = await readdir("./commands");

    cmdFiles.forEach(file => {
        try {
            const f = require(`./commands/${file}`);
            if (file.split(".").slice(-1)[0] !== "js") return;
            // here it wont work if file name does not end with js
            client.commands.set(f.conf.name, f);
        } catch (e) {
            console.error(`Error in command: ${file}`, e.stack);
        }
    });

const evtFiles = await readdir("./events/");

evtFiles.forEach(file => {
    if (file.split(".").slice(-1)[0] !== "js") return;
    const evtName = file.split(".")[0];
    const event = require(`./events/${file}`);
    client.on(evtName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
});
};


client.login(client.config.token);

load();