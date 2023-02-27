const { Gallery } = require('../models');

const commentdata = [
  {
    name: 'Test'
  },
];

const CommentSeed = () => Gallery.bulkCreate(commentdata);

module.exports = CommentSeed;
