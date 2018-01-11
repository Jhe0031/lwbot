module.exports.run = async (client) => {
    console.log(`Bot is online`);
    client.channels.get(("382591354427146240" && "235920926862999556" && "389550821584666628")).send(":white_check_mark: **Bot is online!**");

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

    var playings = ['with Shin-Ae', 'with James', 'with Nen', 'with fire', 'on Webtoons instead of working', 'with your heart', 'with Shen', 'with SAI', 'some game or something idrk', 'with the big boys', 'with Madi', 'in Webtoonland', 'in Wonderland', 'Adobe Illustrator', 'Fire Alpaca', 'for the money', 'YAAAASSSSS', 'with my code', 'with time', 'in space', 'for the good guys', 'with other bots', 'with the ratelimit ;)', 'with the Podcast crew', 'uh no lmao', '[playing status]', '[object Object]', 'against the clock', 'Error 503: Forbidden', 'with your ships', 'Monopoly', 'with life in a box', 'with life', 'with the other lurkers', 'with the skin of my enemies', 'for the glory', 'with friends', 'on the beach', 'at the mall', 'at home', 'on the couch', '?¿', 'devil\'s advocate', 'Poker', 'MS Paint', 'with Kowoks', 'with Uru-chan', 'with Quimchee'];

    Array.prototype.randomElement = function (array) {
        return array[Math.floor(Math.random() * array.length)]
    }

    setInterval(() => {
        client.user.setGame(playings.randomElement(playings));
    }, 15000)
};
