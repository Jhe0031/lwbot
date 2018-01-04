const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const Sequelize = require('sequelize');
const config = require("./config.json");

const PREFIX = config.prefix;

//[alpha]
const sequelize = new Sequelize('database', 'user', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  logging: false,
  // SQLite only
  storage: 'database.sqlite',
});

//[beta]
const Tags = sequelize.define('tags', {
  name: {
      type: Sequelize.STRING,
      unique: true,
  },
  description: Sequelize.TEXT,
  username: Sequelize.STRING,
  usage_count: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false,
  },
});

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  // This is the best way to define args. Trust me.
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

//[gamma]
client.once('ready', () => {Tags.sync();});

//That green color is 54371 (for future reference)

client.login(config.token);
