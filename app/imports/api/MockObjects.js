/* ----------- SurfBreak ----------- */

import PropTypes from 'prop-types';

export const surfBreakMockObject = {
  name: 'Banzai Pipeline',
  followersIds: ['ksdnfksfn', 'sldknflskdnf', 'sdlkfnvosdfngo'],
  image: 'https://lushpalm.com/wp-content/uploads/2017/11/oahu-surf-spots-pipeline.webp',
  description: 'If you are on a quest to find the legendary Banzai Pipeline Hawaii, known around the world  for its perfect barreling waves, then head to Ehukai Beach Park on the North Shore Oahu.',
  address: '59-337 Ke Nui Rd, Haleiwa, HI 96712',
};

const surfBreakMockObject2 = {
  name: 'HALE’IWA',
  followersIds: ['sldknflskdnf', 'sdlkfnvosdfngo'],
  image: 'https://lushpalm.com/wp-content/uploads/2017/11/oahu-surf-spots-north-shore.webp',
  // eslint-disable-next-line max-len
  description: 'Elmo is a red Muppet character on the long-running PBS/HBO children\'s television show Sesame Street. A furry red monster with a falsetto voice, he has illeism, and also hosts the last full fifteen-minute segment on Sesame Street, "Elmo\'s World", which is aimed at toddlers.',
  address: 'Hale`iwa, Hawai`i 96712',
};

const surfBreakMockObject3 = {
  name: 'PUA’ENA POINT',
  followersIds: ['sldknflskdnf', 'sdlkfnvosdfngo'],
  image: 'https://lushpalm.com/wp-content/uploads/2017/11/oahu-surf-spots-haleiwa.webp',
  description: 'Step 1: Prepare Baking Pans. ...\n' +
    'Step 2: Allow Ingredients to Reach Room Temperature. ...\n' +
    'Step 3: Preheat the Oven. ...\n' +
    'Step 4: Stir Together Dry Ingredients. ...\n' +
    'Step 5: Combine the Butter and Sugar. ...\n' +
    'Step 6: Add Eggs One at a Time. ...\n' +
    'Step 7: Alternate Adding Dry and Wet Ingredients. ...\n' +
    'Step 8: Pour Batter into Pans and Bake.',
  address: '59-337 Ke Nui Rd, Haleiwa, HI 96712',
};

/* ----------- SurfBreaks page ----------- */

export const surfBreakMockObjects = [
  surfBreakMockObject,
  surfBreakMockObject2,
  surfBreakMockObject3,
];

/* ----------- Specific SurfBreak page ----------- */

export const surfBreakConditionMockObject = {
  temperature: 90,
  windSpeed: 23,
  windDir: 'NW',
  waveHeight: 5,
};

/* ----------- Friends List ----------- */

export const contacts = [{
  firstName: 'Chicken', lastName: 'Joe', level: 'Advanced',
  image: 'https://m.media-amazon.com/images/I/51e3smIL9bL._AC_SL1000_.jpg',
  bio: 'Eh, no drop in on me brah',
},
];
