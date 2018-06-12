import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { PostsByUsers } from '../PostsByUser';

Enzyme.configure({ adapter: new Adapter() });

describe('<PostsByUsers /> Component', () => {
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      posts: [
        {
          id: 1,
          title: 'title1',
          user: {
            first: 'first1',
            last: 'last2',
          },
        },
      ],
      ...overrides,
    };

    component = shallow(<PostsByUsers {...mockProps} />);
  };

  beforeEach(() => {
    setUpComponent();
  });

  it('should return list of posts', () => {
    expect(component.find('div ul li')).toHaveLength(1);
  });
});
