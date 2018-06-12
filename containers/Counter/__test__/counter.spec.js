import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import Counter from '../Counter';

const mockStore = configureStore();

Enzyme.configure({ adapter: new Adapter() });

describe('<Counter /> component', () => {
  let instance;
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      count: 1,
      increment: jest.fn(),
      ...overrides,
    };
    const mockState = {
      count: {
        count: 1,
      },
    };
    const store = mockStore(mockState);

    component = mount(<Counter {...mockProps} store={store} />);
    instance = component.instance();
  };

  beforeEach(() => {
    setUpComponent();
  });

  describe('return funcntion', () => {
    it('should return h3 with text Count: ', () => {
      expect(component.find('div h3').text()).toEqual('Count: 1');
    });
  });
});
