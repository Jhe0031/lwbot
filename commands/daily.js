module.exports.run = async (client, message, args, currency, claimedRecently) => {
    if (claimedRecently.has(message.author.id)) return message.channel.send(`:atm: **|** :x: You have already claimed your daily **100 Kowoks**! :moneybag:`);

    claimedRecently.add(message.author.id);
    currency.add(message.author.id, +100);
    message.channel.send(`:atm: **|** :white_check_mark: You have collected your daily **100 Kowoks!** | Balance: **${currency.getBalance(message.author.id)} Kowoks** :moneybag:`);
    setTimeout(() => {
        claimedRecently.delete(message.author.id);
    }, 8.64e+7);
};