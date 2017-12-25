module.exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const sql = require("sqlite");//DO NOT TOUCH SAMIR.
    sql.open("./commands/database/Webtoon.sqlite");//DO Not TOUCH SAMIR


    let removeName = message.content.split(' ')[1];


    sql.get(`SELECT * FROM Webtoon WHERE name ="${removeName}"`).then(row => {
        if(!row){
            message.channel.sendEmbed(new Discord.RichEmbed()

            .setTitle("Cannot find " + removeName + " in the database")
        
        );
        return;
        }

    sql.run(`DELETE FROM Webtoon WHERE name = "${removeName}"`);
    })


    message.channel.sendEmbed(new Discord.RichEmbed()

    .setTitle("You've removed " + removeName + " from the database")

);

};