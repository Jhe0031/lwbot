const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const Sequelize = require('sequelize');
const config = require("./config.json");

const { Users, CurrencyShop } = require('./dbObjects');
const currency = new Discord.Collection();

const PREFIX = config.prefix;

Reflect.defineProperty(currency, 'add', {
  value: async function add(id, amount) {
      const user = currency.get(id);
      if (user) {
          user.balance += Number(amount);
          return user.save();
      }
      const newUser = await Users.create({ user_id: id, balance: amount });
      currency.set(id, newUser);
      return newUser;
  },
});

Reflect.defineProperty(currency, 'getBalance', {
  value: function getBalance(id) {
      const user = currency.get(id);
      return user ? user.balance : 0;
  },
});

const sequelize = new Sequelize('database', 'user', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  logging: false,
  // SQLite only
  storage: 'database.sqlite',
});

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
    commandFile.run(client, message, args, currency);
  } catch (err) {
    console.error(err);
  }
});

client.on('message', async message => {
  currency.add(message.author.id, 1);

  if (!message.content.startsWith(PREFIX)) return;
  const input = message.content.slice(PREFIX.length).trim();
  if (!input.length) return;
  const [, command, commandArgs] = input.match(/(\w+)\s*([\s\S]*)/);
});

client.once('ready', () => {
  const storedBalances = await Users.findAll();
  storedBalances.forEach(b => currency.set(b.user_id, b));
})

//That green color is 54371 (for future reference)

client.login(config.token);
