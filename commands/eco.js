module.exports.run = (client, message, args, currency) => {
    const target = message.mentions.users.first() || message.author
    
    if(message.author.id !== ("107599228900999168" || "235920655823011840")) return;
    else {
        if(!args[0]) return message.channel.send(":x: Add / remove");
        else {
            if(args[0] === "add"){
                    currency.add(target.id, +args[1]);
                    message.channel.send(`:white_check_mark: Added **${args[1]}** :moneybag: to **${target.tag}** | Balance: **${currency.getBalance(target.id)}** :moneybag:`);
            } else if(args[0] === "remove"){
                    currency.add(target.id, -args[1]);
                    message.channel.send(`:white_check_mark: Removed **${args[1]}** :moneybag: from **${target.tag}** | Balance: **${currency.getBalance(target.id)}** :moneybag:`);
            }
        }
    }
};