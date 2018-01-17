module.exports.run = async (client) => {
    console.log(`Bot is online`);
    client.channels.get("389550821584666628").send("hello hello i'm online ;D");

    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('database', 'user', 'password', {
        host: 'localhost',
        dialect: 'sqlite',
        logging: false,
        // SQLite only
        storage: 'database.sqlite',
    });
    
    const Tags = sequelize.define('tags', {
        name: {
            type: Sequelize.STRING,
            unique: true,
        },
        description: Sequelize.TEXT,
        username: Sequelize.STRING,
        usage_count: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
      });
    Tags.sync();

    // If you want to see this correctly, you need word wrap on
    var playings1 = [
        ['with Shin-Ae', {type: "PLAYING"}], 
        ['with James', {type: "PLAYING"}], 
        ['with Nen', {type: "PLAYING"}], 
        ['with fire', {type: "PLAYING"}], 
        ['on Webtoons instead of working', {type: "PLAYING"}], 
        ['with your heart', {type: "PLAYING"}], 
        ['with Shen', {type: "PLAYING"}], 
        ['with SAI', {type: "PLAYING"}], 
        ['some game or something idrk', {type: "PLAYING"}], 
        ['with the big boys', {type: "PLAYING"}], 
        ['with Madi', {type: "PLAYING"}], 
        ['in Webtoonland', {type: "PLAYING"}], 
        ['in Wonderland', {type: "PLAYING"}], 
        ['Adobe Illustrator', {type: "PLAYING"}], 
        ['Fire Alpaca', {type: "PLAYING"}], 
        ['for the money', {type: "PLAYING"}], 
        ['YAAAASSSSS', {type: "PLAYING"}], 
        ['with my code', {type: "PLAYING"}], 
        ['with time', {type: "PLAYING"}], 
        ['in space', {type: "PLAYING"}], 
        ['for the good guys', {type: "PLAYING"}], 
        ['with other bots', {type: "PLAYING"}], 
        ['with the ratelimit ;)', {type: "PLAYING"}], 
        ['with the Podcast crew', {type: "PLAYING"}], 
        ['[status]', {type: "PLAYING"}], 
        ['[object Object]', {type: "PLAYING"}], 
        ['against the clock', {type: "PLAYING"}], 
        ['Error 503: Forbidden', {type: "PLAYING"}], 
        ['with your ships', {type: "PLAYING"}], 
        ['Monopoly', {type: "PLAYING"}], 
        ['with life in a box', {type: "PLAYING"}], 
        ['with life', {type: "PLAYING"}], 
        ['with the other lurkers', {type: "PLAYING"}], 
        ['with the skin of my enemies', {type: "PLAYING"}], 
        ['for the glory', {type: "PLAYING"}], 
        ['with friends', {type: "PLAYING"}], 
        ['on the beach', {type: "PLAYING"}], 
        ['at the mall', {type: "PLAYING"}], 
        ['at home', {type: "PLAYING"}], 
        ['on the couch', {type: "PLAYING"}], 
        ['?¿', {type: "PLAYING"}], 
        ['devil\'s advocate', {type: "PLAYING"}], 
        ['Poker', {type: "PLAYING"}], 
        ['MS Paint', {type: "PLAYING"}], 
        ['with Kowoks', {type: "PLAYING"}], 
        ['with Uru-chan', {type: "PLAYING"}], 
        ['with Quimchee', {type: "PLAYING"}], 
        ['with Chris McCoy @ Safely Endangered', {type: "PLAYING"}], 
        [' ', {type: "PLAYING"}],
        ['Netflix', {type: "WATCHING"}],
        ['Spotify', {type: "LISTENING"}]
    ];

    Array.prototype.randomElement = function (array) {
        return array[Math.floor(Math.random() * array.length)]
    }

    var playings = [['with fire', {type: "PLAYING"}], ['Netflix', {type: "WATCHING"}], ['Spotify', {type: "LISTENING"}]]
    setInterval(() => {
        var randomPl = playings.randomElement(playings);
        client.user.setActivity(randomPl[0], randomPl[1]);
    }, 15000)
    

    /* setInterval(() => {
        var randomPl = playings.randomElement(playings)
        client.user.setActivity(randomPl[0], randomPl[1]);
    }, 15000) */
    


    /* setInterval(() => {
        require('child_process').exec('git add database.sqlite', async (e, out, err) => {
            if(e || err) return client.channels.get("389550821584666628").send(`<@107599228900999168>, there was an error updating the database automatically: \`\`\`xl\n${e || err}\n\`\`\``);
            client.channels.get("389550821584666628").send(`:white_check_mark: Added database to git queue, \n\`\`\`xl\n${out}\n\`\`\``);
        });
        require('child_process').exec('git commit -m "Automatic DB Update"', async (e, out, err) => {
            if(e || err) return client.channels.get("389550821584666628").send(`<@107599228900999168>, there was an error updating the database automatically: \`\`\`xl\n${e || err}\n\`\`\``);
            client.channels.get("389550821584666628").send(`:white_check_mark: Commited database to git queue, \n\`\`\`xl\n${out}\n\`\`\``);
        });
        require('child_process').exec('git push origin master', async (e, out, err) => {
            if(e || err) return client.channels.get("389550821584666628").send(`<@107599228900999168>, there was an error updating the database automatically: \`\`\`xl\n${e || err}\n\`\`\``);
            client.channels.get("389550821584666628").send(`:white_check_mark: Pushed database to github, \n\`\`\`xl\n${out}\n\`\`\``);
        });
    }, 300000) */
};
