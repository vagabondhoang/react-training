import { createSelector } from 'reselect';

import { userIdSelector, postsSelector, usersSelector, listingSelector } from '../../selectors';

const makeGetPosts = createSelector(
  userIdSelector,
  postsSelector,
  usersSelector,
  listingSelector,
  (userId, posts, users, listing) =>
    listing.filter(id => posts[id].author === userId).map(id => {
      const post = posts[id];
      return { ...post, user: users[post.author] };
    })
);

export default makeGetPosts;
