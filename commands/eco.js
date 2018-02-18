module.exports.run = (client, message, args, currency) => {
    try {
        const target = message.mentions.users.first() || message.author
    
    if(message.author.id !== ("107599228900999168" || "235920655823011840")) return;
    else {
        if(!args[0]) return message.channel.send(":x: Add / remove / ftrans");
        else {
            if(args[0] === "add"){
                    currency.add(target.id, +args[1]);
                    message.channel.send(`:white_check_mark: Added **${args[1]}** :moneybag: to **${target.tag}** | Balance: **${currency.getBalance(target.id)}** :moneybag:`);
            } else if(args[0] === "remove"){
                    currency.add(target.id, -args[1]);
                    message.channel.send(`:white_check_mark: Removed **${args[1]}** :moneybag: from **${target.tag}** | Balance: **${currency.getBalance(target.id)}** :moneybag:`);
            } else if(args[0] === "ftrans"){
                var amount = args[1];
                var transFrom = message.mentions.users.first();
                var transTo = message.mentions.users.last();
               
                if (!amount || isNaN(amount)) return message.channel.send(`:x: Invalid transfer amount`);
                if(!transFrom) return message.channel.send(`:x: No transfer from user`);
                if(!transTo) return message.channel.send(`:x: No transfer to user`);

                currency.add(transFrom.id, -amount);
                currency.add(transTo.id, +amount);
                
                message.channel.send(`:left_right_arrow: Transferred **${amount}** Kowoks from **${transFrom.tag}** to **${transTo.tag}** **|** **${transFrom.tag}**'s balance: **${currency.getBalance(transFrom.id)} Kowoks** **|** **${transTo.tag}**'s balance: **${currency.getBalance(transTo.id)} Kowoks**`);
            }
        }
    }
    } catch (err){
        message.channel.send(`:x: ${err}`);
    }
};