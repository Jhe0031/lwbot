module.exports.run = (client, message, args, currency) => {
    if(message.author.id !== ("107599228900999168" || "235920655823011840")) return;
    else {
        if(!args[0]) return message.channel.send(":x: You forgot to specify whether to add or remove.")
        else {
            if(args[0] === "add") {
                if(args[1].typeOf !== "integer") return message.channel.send(`:x: args[1] is not a number`); else {
                currency.add(message.mentions.users.first().id, +args[1]);
                message.channel.send(`:white_check_mark: Added **${args[1]}** :moneybag: to **${message.mentions.users.first().tag}** | Balance: **${currency.getBalance(message.mentions.users.first().id)}** :moneybag:`);
                }
            } else if(args[0] === "remove"){
                if(args[1].typeOf !== "integer") return message.channel.send(`:x: args[1] is not a number`); else {
                currency.add(message.mentions.users.first().id, -args[1]);
                message.channel.send(`:white_check_mark: Removed **${args[1]}** :moneybag: from **${message.mentions.users.first().tag}** | Balance: **${currency.getBalance(message.mentions.users.first().id)}** :moneybag:`);
                }
            }
        }
    }
};