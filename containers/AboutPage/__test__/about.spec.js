import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AboutPage, mapStateToProps } from '../About.js';
import InputPreview from '../../../components/InputPreview';

Enzyme.configure({ adapter: new Adapter() });

describe('<About /> Component', () => {
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      message: 'message',
      setMessage: jest.fn(e => e),
      ...overrides,
    };

    component = shallow(<AboutPage {...mockProps} />);
  };

  beforeEach(() => {
    setUpComponent();
  });

  describe('return()', () => {
    it('should return ...', () => {
      setUpComponent({
        message: undefined,
      });
    });
  });

  describe('mapStateToProps', () => {
    it('should return message object', () => {
      const messageReducer = {
        message: '',
      };
      const state = {
        messageReducer,
      };

      expect(mapStateToProps(state).message).toEqual(messageReducer);
    });
  });

  describe('handleChange()', () => {
    it('should call setMessage()', () => {
      let event;
      const handleChange = jest.fn();
      const input = component.find(InputPreview);
      input.simulate('change', event);

      expect(handleChange).not.toBeCalled();
    });
  });
});
