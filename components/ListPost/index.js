import React from 'react';
import styled from 'styled-components';

export const PostList = styled.li`
  background: ${props => (parseInt(props.title.slice(-1)) % 2 === 0 ? 'yellow' : 'green')};
  color: ${props => (parseInt(props.title.slice(-1)) % 2 === 0 ? 'green' : 'yellow')};
`;

export const ListPost = ({ posts }) =>
  posts.map(post => (
    <PostList title={post.title} key={post.id}>
      {`${post.title} - ${post.user.first} ${post.user.last}`}
    </PostList>
  ));
