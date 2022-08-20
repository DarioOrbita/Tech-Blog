const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'gfgsfsgfgfdsgfsdsfgdgsfdsfgfgd',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'I like to creep around my home and act like a goblin',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues.',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'BOTTOM TEXT',
    user_id: 4,
    post_id: 3
  },
  {
    comment_text: 'buh',
    user_id: 5,
    post_id: 1
  },
  {
    comment_text: '0_0',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'teckst 2 long',
    user_id: 2,
    post_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;