import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { UsersPage, mapStateToProps } from '../Users';

Enzyme.configure({ adapter: new Adapter() });

describe('<Users /> component', () => {
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      getUsersRequest: jest.fn(),
      data: {
        isFetching: false,
        users: [
          [
            {
              id: 1,
              name: 'name1',
            },
            {
              id: 2,
              name: 'name2',
            },
          ],
        ],
      },
      ...overrides,
    };

    component = mount(<UsersPage {...mockProps} />);
  };

  beforeEach(() => {
    setUpComponent();
  });

  describe('return()', () => {
    it('should return list of users', () => {
      expect(component.find('div ul li')).toHaveLength(2);
    });
    it('should return p tag with value loading', () => {
      setUpComponent({
        data: {
          isFetching: true,
        },
      });

      expect(component.find('div p').text()).toEqual('Loading ...');
    });
  });

  describe('mapStateToProps()', () => {
    it('should return a data Object', () => {
      const userReducer = {
        users: [],
        isFetching: false,
        error: '',
      };
      const state = {
        userReducer,
      };

      expect(mapStateToProps(state).data).toEqual(userReducer);
    });
  });
});
