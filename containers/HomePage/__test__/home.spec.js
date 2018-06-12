import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Home from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home /> component', () => {
  it('should return correctly', () => {
    const component = shallow(<Home />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
