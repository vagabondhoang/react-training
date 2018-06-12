import React from 'react';
import Enzyme, { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

import Posts from '../Posts';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

describe('post container', () => {
  const mockedState = {
    postsById: {
      postsById: {
        postsById: {},
      },
    },
    usersById: {
      usersById: {
        usersById: {},
      },
    },
    postListing: {
      postListing: [],
    },
  };

  const store = mockStore(mockedState);

  const component = mount(<Posts store={store} />);

  it('render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
