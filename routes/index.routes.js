const express = require('express');
const router = express.Router();

const Post = require('../models/Post.model');

/* GET home page */
router.get('/', (req, res, next) => {
  Post.find()
    .populate('creatorId')
    .then(posts => res.render('index', { title: 'App created with Ironhack generator 🚀', posts }))
    .catch(error => next(error));
});

module.exports = router;
