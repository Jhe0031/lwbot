module.exports.run = async (client, message, args, currency) => {
    const { Users, CurrencyShop } = require('../dbObjects');
    const user = await Users.findByPrimary(message.author.id);
    return message.channel.send(
        currency.sort((a, b) => b.balance - a.balance)
            .filter(user => client.users.has(user.user_id))
            .first(15)
            .map((user, position) => `(${position + 1}) ${(client.users.get(user.user_id).tag)}: ${user.balance} Kowoks 💰`)
            .join('\n'),
        { code: true }
    );
}