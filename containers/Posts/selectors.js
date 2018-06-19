import { createSelector } from 'reselect';

import { postsSelector, usersSelector, listingSelector } from '../../selectors';

const getListing = createSelector(postsSelector, usersSelector, listingSelector, (posts, users, listing) =>
  listing.map(id => {
    const post = posts[id];
    return { ...post, user: users[post.author] };
  })
);

export default getListing;
