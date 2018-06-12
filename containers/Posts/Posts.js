// @flow

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import getListing from './selectors';

type Props = {
  posts: Array<any>,
};

const ListPost = styled.li`
  background: ${props => (parseInt(props.title.slice(-1)) % 2 === 0 ? 'yellow' : 'green')};
  color: ${props => (parseInt(props.title.slice(-1)) % 2 === 0 ? 'green' : 'yellow')};
`;

const Posts = ({ posts }: Props) => (
  <div>
    <h3>Posts</h3>
    <ul>
      {posts.map(post => (
        <ListPost title={post.title} key={post.id}>
          {`${post.title} - ${post.user.first} ${post.user.last}`}
        </ListPost>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  posts: getListing(state),
});

export default connect(mapStateToProps)(Posts);
