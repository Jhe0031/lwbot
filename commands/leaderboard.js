module.exports.run = async (client, message, args, currency) => {
    const Discord = require('discord.js')
    
    const { Users, CurrencyShop } = require('../dbObjects');
    const user = await Users.findByPrimary(message.author.id);
    var leaderboardData = currency.sort((a, b) => b.balance - a.balance)
            .filter(user => client.users.has(user.user_id))
            .first(15)
            .map((user, position) => `\`•${position + 1}•\` ${(client.users.get(user.user_id).username)}: **${user.balance} Kowoks** 💰`)
            .join('\n')

    message.channel.send(new Discord.RichEmbed()
        .addField("Leaderboard", leaderboardData)
        .setColor(54371)
    );
}