module.exports.run = async (client, message, args) => {
    const { Users, CurrencyShop } = require('../data/dbObjects');
    
    const target = message.mentions.users.first() || message.author;
    const user = await Users.findByPrimary(target.id);
    const items = await user.getItems();
    
    if (!items.length) return message.channel.send(`${target.tag} has nothing!`);
    else message.channel.send(`${target.tag} currently has ${items.map(i => `${i.amount} ${i.item.name}`).join(', ')}`);
};