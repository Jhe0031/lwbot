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
};
