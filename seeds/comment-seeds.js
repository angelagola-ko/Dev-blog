const { Comment } = require('../models');

const commentdata = [  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
    user_id: 1,
    post_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;