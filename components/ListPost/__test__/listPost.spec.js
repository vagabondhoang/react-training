import React from 'react';
import Enzyme, { mount } from 'enzyme';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import { ListPost } from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('ListPost component', () => {
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      posts: [
        {
          title: 'title1',
          user: {
            first: 'first1',
            last: 'last1',
          },
        },
      ],
      ...overrides,
    };

    component = mount(<ListPost {...mockProps} />);
  };

  beforeEach(() => {
    setUpComponent();
  });

  it('should ...', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
