import { combineReducers } from 'redux';
import createReducer from '../rootReducer';
import usersById from '../usersByIdReducer';
import postsById from '../postsByIdReducer';
import postListing from '../postListingReducer';
import count from '../../containers/Counter/reducer';

describe('createReducer', () => {
  it('should return combineReducers()', () => {
    let asyncReducers;
    const rootReducer = combineReducers({
      usersById,
      postsById,
      postListing,
      count,
      ...asyncReducers,
    });

    expect(JSON.stringify(createReducer(asyncReducers))).toEqual(JSON.stringify(rootReducer));
  });
});
