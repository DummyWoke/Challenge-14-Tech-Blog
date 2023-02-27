const router = require('express').Router();
const { Post, User, Comment } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all Galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({

      attributes:['id','name','content'],

      include: [
        {
          model: Comment,
          attributes: ['id', 'content','LinkedUser','LinkedPost'],
        },

        {
          model: User,
          attributes: ['username']
        }
      ],
    });

    const Posts = dbPostData.map((Posts) =>
    Posts.get({ plain: true })
    );

    res.render('homepage', {
      Posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
// Use the custom middleware before allowing the user to access the gallery
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      
      attributes:['id','name','content'],
      
      include: [
        {
          model: Comment,
          attributes: ['id', 'content','LinkedUser','LinkedPost'],
        },

        {
          model: User,
          attributes: ['username']
        }
      ]
    });

    const post = dbPostData.get({ plain: true });
    res.render('post', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
