import { combineReducers } from 'redux';

import messageReducer from '../containers/HomePage/reducer';
import usersByIdReducer from './usersByIdReducer';
import postsByIdReducer from './postsByIdReducer';
import postListingReducer from './postListingReducer';
import counterReducer from '../containers/Counter/reducer';

const rootReducer = combineReducers({
  messageReducer,
  usersById: usersByIdReducer,
  postsById: postsByIdReducer,
  postListing: postListingReducer,
  count: counterReducer,
});

export default rootReducer;
