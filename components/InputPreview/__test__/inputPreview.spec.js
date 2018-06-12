import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import InputPreview from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<InputPreview /> Component', () => {
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      value: 'test',
      onChange: jest.fn(),
      ...overrides,
    };

    component = mount(<InputPreview {...mockProps} />);
  };

  beforeEach(() => {
    setUpComponent();
  });

  describe('handleChange method', () => {
    it('should be called ', () => {
      component.find('input').simulate('change');
      expect(mockProps.onChange).toBeCalledWith('test');
    });
  });
});
