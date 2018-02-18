module.exports.run = (client, message, args) => {
    const Discord = require(`discord.js`);
    const sql = require(`sqlite`); //DO NOT TOUCH SAMIR.
    sql.open(`./commands/database/Webtoon.sqlite`); //DO Not TOUCH SAMIR

    var colours = (Math.random() * 0xFFFFFF << 0).toString(16); //Randomises colours for a system I plan to put in place later no stressy make messy


    const newName = args[0];
    const newRss = args[1];
    let newColour = args[2];

    //Validatus Maximus..... I am Larry Trotter deal wit it

    if (!newName) {
        message.channel.sendEmbed(new Discord.RichEmbed()
            .setTitle(`:x: Please include the name of the Webtoon`)
            .setColor(16711680)
        );
        return;
    }

    if (!newRss) {
        message.channel.sendEmbed(new Discord.RichEmbed()
            .setTitle(`:x: No RSS link detected.`)
            .setDescription(`If you do not know how, do \`lw-rsshelp\``)
            .setColor(16711680)
        );
        return;
    }

    //No Validatus for colours because I have something better for that *whispers*Biggus Dickus
    if (!newColour) {

        newColour = colours;

        message.channel.sendEmbed(new Discord.RichEmbed()
            .setTitle(`:x: No color detected. Automatically chosen`)
            .setColor(newColour)
        );
    }

    //########################################################################################### DO NOT TOUCH SAMIR. dis be the database setter upper and upper dater
    sql.get(`SELECT * FROM Webtoon WHERE name ="${newName}"`).then(row => {
        if (!row) {
            sql.run(`REPLACE INTO Webtoon (name, rsslink, colour) VALUES (?, ?, ?)`, [newName , newRss, newColour]);
        }
    }).catch(() => {
        console.errors;
        sql.run(`CREATE TABLE IF NOT EXISTS Webtoon (name VARCHAR(100), rsslink VARCHAR(200) UNIQUE, colour VARCHAR(50))`).then(() => {
            sql.run(`REPLACE INTO Webtoon (name, rsslink, colour) VALUES (?, ?, ?)`, [newName, newRss, newColour]);
        });
    });
    //########################################################################################### PAPA NEN LUVS YEW.

    message.channel.sendEmbed(new Discord.RichEmbed()
        .setTitle(`You've added ` + newName + ` to the database`)
        .setColor(newColour)
    );
};
