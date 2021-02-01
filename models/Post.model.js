const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
  {
    content: {
      type: String,
      trim: true,
      required: [true, 'Content is required.']
    },
    creatorId: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    },
    picPath: String,
    picName: String
  },
  {
    timestamps: true
  }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
