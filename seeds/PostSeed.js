const { Painting } = require('../models');

const postdata = [
  {

  },
];

const SeedPost = () => Painting.bulkCreate(postdata);

module.exports = SeedPost;
