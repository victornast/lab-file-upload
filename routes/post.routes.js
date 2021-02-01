// routes/post.routes.js

const { Router } = require('express');
const router = new Router();
const Post = require('../models/Post.model');

const routeGuard = require('../configs/route-guard.config');

const uploadMiddleware = require('../configs/file-upload.config');

router.get('/post', routeGuard, (req, res) => {
  const user = req.session.currentUser;
  res.render('post/post', { user });
});

router.post('/post', routeGuard, uploadMiddleware.single('picPath'), (req, res, next) => {
  const data = req.body;
  let image;
  if (req.file) image = req.file.path;

  Post.create({
    content: data.content,
    picPath: image,
    picName: data.picName,
    creatorId: req.session.currentUser._id
  })
    .then(post => {
      console.log(post);
      res.redirect('/');
    })
    .catch(error => next(error));
});

router.get('/posts/:id', (req, res, next) => {
  const id = req.params.id;
  Post.findById(id)
    .populate('creatorId')
    .then(post => res.render('post/detail', { post }).catch(error => next(error)));
});

module.exports = router;
