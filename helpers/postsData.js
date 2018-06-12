import getPosts from '../fakeData';

export const postsList = getPosts().posts.map(post => post.id);
export const getPostsById = () => {
  const postsById = {};
  getPosts().posts.forEach(post => {
    postsById[post.id] = post;
  });
  return postsById;
};

export const getUsersById = () => {
  const usersById = {};
  getPosts().users.forEach(user => {
    usersById[user.id] = user;
  });
  return usersById;
};
