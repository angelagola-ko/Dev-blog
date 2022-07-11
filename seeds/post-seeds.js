const { Post } = require('../models');

const postdata = [
  {
    title: 'lorem adawdsf',
    content: "lorem ipsum",
    user_id: 1
  },
  {
    title: 'Banyan trees are my favorite',
    content: 'Because they have a lotta roots n are fun to climb.',
    user_id: 2
  },
  {
    title: 'FLying Squirrels',
    content: 'How many squirrels live in a tree?',
    user_id: 3
  },
  {
    title: 'Papa Fritas.',
    content: 'Spaghetti is good, but i prefer ittehgaps.',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
