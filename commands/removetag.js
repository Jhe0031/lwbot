module.exports.run = async (client, message, args) => {
  const Sequelize = require(`sequelize`);
  const sequelize = new Sequelize(`database`, `user`, `password`, {
    host: `localhost`,
    dialect: `sqlite`,
    logging: false,
    // SQLite only
    storage: `tags.sqlite`,
  });
    
  const Tags = sequelize.define(`tags`, {
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
    
  const tagName = args;
  // equivalent to: DELETE from tags WHERE name = ?;
  const rowCount = await Tags.destroy({ where: { name: tagName } });
  if (!rowCount) return message.reply(`That tag did not exist.`);
    
  return message.reply(`Tag deleted.`);
};