const sequelize = require('../config/connection');
const SeedUser = require('./UserSeed');
const SeedComment = require('./CommentSeed');
const SeedPost = require('./PostSeed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await SeedUser();
  await SeedComment();
  await SeedPost();

  process.exit(0);
};

seedAll();
