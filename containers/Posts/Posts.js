// @flow

import React from 'react';
import { connect } from 'react-redux';

import { ListPost } from '../../components/ListPost';

import getListing from './selectors';

type Props = {
  posts: Array<Object>,
};

const Posts = ({ posts }: Props) => (
  <div>
    <h3>Posts</h3>
    <ul>
      <ListPost posts={posts} />
    </ul>
  </div>
);

const mapStateToProps = state => ({
  posts: getListing(state),
});

export default connect(mapStateToProps)(Posts);
