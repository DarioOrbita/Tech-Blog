const { Post } = require('../models');

const postdata = [
  {
    title: 'Why the fall of the Roman Empire was an inside job',
    post_url: 'https://en.wikipedia.org/wiki/Sausage',
    user_id: 1
  },
  {
    title: 'The cultural legacy of Morbius',
    post_url: 'https://en.wikipedia.org/wiki/Sausage',
    user_id: 2
  },
  {
    title: 'TOP 10 THINGS YOUR PROCTOLOGIST DOESNT WANT YOU TO KNOW (NOT CLICKBAIT)',
    post_url: 'https://en.wikipedia.org/wiki/Sausage',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
