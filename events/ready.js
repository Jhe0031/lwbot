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

    var playings = ['with Shin-Ae', 'with James', 'with Nen', 'with fire', 'on Webtoons instead of working', 'with your heart', 'with Shen', 'with SAI', 'some game or something idrk', 'with the big boys', 'with Madi', 'in Webtoonland', 'in Wonderland', 'Adobe Illustrator', 'Fire Alpaca', 'for the money', 'YAAAASSSSS', 'with my code', 'with time', 'in space', 'for the good guys', 'with other bots', 'with the ratelimit ;)', 'with the Podcast crew', 'uh no lmao', '[playing status]', '[object Object]', 'against the clock', 'Error 503: Forbidden', 'with your ships', 'Monopoly', 'with life in a box', 'with life', 'with the other lurkers', 'with the skin of my enemies', 'for the glory', 'with friends', 'on the beach', 'at the mall', 'at home', 'on the couch', '?¿', 'devil\'s advocate', 'Poker', 'MS Paint', 'with Kowoks', 'with Uru-chan', 'with Quimchee', 'with Chris McCoy @ Safely Endangered', ' '];

    Array.prototype.randomElement = function (array) {
        return array[Math.floor(Math.random() * array.length)]
    }

    /* setInterval(() => {
        client.user.setActivity(playings.randomElement(playings));
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
