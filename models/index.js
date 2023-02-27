const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'LinkedUser'
});

User.hasMany(Comment, {
  foreignKey: 'LinkedUser'
});

Comment.belongsTo(User, {
  foreignKey: 'LinkedUser'
});

Comment.belongsTo(Post, {
  foreignKey: 'LinkedPost'
});

Post.hasMany(Comment, {
  foreignKey: 'LinkedPost'});

Post.belongsTo(User, {
  foreignKey: 'LinkedUser',
});


module.exports = {User, Post, Comment};