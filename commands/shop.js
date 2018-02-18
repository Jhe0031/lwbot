module.exports.run = async (client, message, args, currency) => {
    const { Users, CurrencyShop } = require('../data/dbObjects');
    const items = await CurrencyShop.findAll();
    return message.channel.send(items.map(item => `${item.name}: ${item.cost}💰`).join('\n'), { code: true });
};