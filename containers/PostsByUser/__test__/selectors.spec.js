import makeGetPosts from '../selectors';

describe('makeGetPosts selector', () => {
  it('should select posts listing', () => {
    const mockedState = {
      postsById: {
        postsById: {
          postsById: {
            'post-1': {
              id: 'post-1',
              author: 'user-1',
              title: 'Post 1',
            },
          },
        },
      },
      usersById: {
        usersById: {
          usersById: {
            'user-1': {
              id: 'user-1',
              first: 'Tom',
              last: 'Scott',
            },
          },
        },
      },
      postListing: {
        postListing: ['post-1', 'post-1'],
      },
    };

    const mockProps = {
      user: 'user-1',
    };

    expect(makeGetPosts(mockedState, mockProps)).toEqual([
      { author: 'user-1', id: 'post-1', title: 'Post 1', user: { first: 'Tom', id: 'user-1', last: 'Scott' } },
      { author: 'user-1', id: 'post-1', title: 'Post 1', user: { first: 'Tom', id: 'user-1', last: 'Scott' } },
    ]);
  });
});
