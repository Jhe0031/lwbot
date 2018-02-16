const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const Sequelize = require('sequelize');
const config = require('./config.json');

const { Users, CurrencyShop } = require('./data/dbObjects');
const currency = new Discord.Collection();

const claimedRecently = new Set();

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
    commandFile.run(client, message, args, currency, claimedRecently);
  } catch (err) {
    console.error(err);
  }
});

client.on('message', async message => {
  if(message.author.bot) return;

  currency.add(message.author.id, 1);

  if (!message.content.startsWith(PREFIX)) return;
  const input = message.content.slice(PREFIX.length).trim();
  if (!input.length) return;
  const [, command, commandArgs] = input.match(/(\w+)\s*([\s\S]*)/);
});

client.on('guildMemberAdd', member => {
  var guild = client.guilds.get('382585019300053013');
  var bots = guild.members.filter(member => member.user.bot).map(g => g.toString());
  
  guild.channels.get('382640041358262285').fetchMessage('413827090970968074').then(msg => msg.edit(`**Current total members: \`${guild.memberCount-bots.length}\`**`));
});

client.on('guildMemberRemove', member => {
  var guild = client.guilds.get('382585019300053013');
  var bots = guild.members.filter(member => member.user.bot).map(g => g.toString());
  
  guild.channels.get('382640041358262285').fetchMessage('413827090970968074').then(msg => msg.edit(`**Current total members: \`${guild.memberCount-bots.length}\`**`));
});

client.once('ready', async () => {
  const storedBalances = await Users.findAll();
  storedBalances.forEach(b => currency.set(b.user_id, b));
})

//That green color is 54371 (for future reference)
//Oh and that hex is #59D851

client.login(config.token);
