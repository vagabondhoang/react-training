import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import makeGetPosts from './selectors';

type Props = {
  posts: Array<Object>,
};

export const PostsByUsers = ({ posts }: Props) => (
  <div>
    <h3>Posts</h3>
    <ul>{posts.map(post => <li key={post.id}>{`${post.title} - ${post.user.first} ${post.user.last}`}</li>)}</ul>
  </div>
);

const mapStateToProps = createStructuredSelector({
  posts: makeGetPosts,
});

export default connect(mapStateToProps)(PostsByUsers);
