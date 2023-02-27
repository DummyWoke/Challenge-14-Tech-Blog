const { Gallery } = require('../models');

const userdata = [
  {
  
  }
];

const SeedUser = () => Gallery.bulkCreate(userdata);

module.exports = SeedUser;
