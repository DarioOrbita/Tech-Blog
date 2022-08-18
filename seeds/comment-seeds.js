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
    comment_text: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'BOTTOM TEXT',
    user_id: 4,
    post_id: 3
  },
  {
    comment_text: 'I saw exactly 1.09441 square inches of a girls shoulder today, I immediately fell to my knees, as the rush of dopamine signaling my impending, earth shattering orgasm started making me moan loud enough to deafen EVERYONE in the immediate vicinity. What followed was a torrential downpour of every single sperm cell I ever had, or ever will produce shot out SO HARD that my dick was ripped apart by my Übernut, accelerating to 5% of the speed of light by the time it left my urethra. It vaporized the girl as it punched right through her, it barely slowed before cutting through a structural support beam in the school as if it were a nuclear powered angle grinder. the sheer weight of this historical nut, combined with the total destruction of everything in its path caused the school to collapse, and every female in the state of illinois became pregnant with my children.',
    user_id: 5,
    post_id: 1
  },
  {
    comment_text: 'I miss the old Harambe. Straight from the zoo Harambe. Eating his food Harambe. No attitude Harambe. I hate the new Harambe. Shot by a dude Harambe. The Youtube views Harambe. Up in the news Harambe. I miss the sweet Harambe. Playing with kids Harambe. I gotta say at that time Id like to meet Harambe. See I invented Harambe. It wasnt any Harambes. And now i look and look around and theres no more Harambes.',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Hello Kripp Aryan, am 48 year man from somalia. Sorry for my bed england.. I selled my wife for internet connection for play "heart of stone" and i want to become the goodest player like you. I play with 400 ping on US server and i am rakn 17. pls no copy pasterino my story',
    user_id: 2,
    post_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;