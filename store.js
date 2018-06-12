import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createReducer from './reducers/rootReducer';
import RECEIVE_DATA from './types/data';
import getPosts from './fakeData';
import rootSaga from './utils/rootSaga';

/* saga middleware */
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'MyApp',
        actionsBlacklist: ['REDUX_STORAGE_SAVE'],
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(createReducer(), enhancer);
sagaMiddleware.run(rootSaga);

/* inject reducer */
const initilizeStore = () => {
  store.asyncReducers = {};
  store.injectReducer = (key, reducer) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(store.asyncReducers));
    return store;
  };

  return store;
};

store.dispatch({
  type: RECEIVE_DATA,
  payload: getPosts(),
});

export default initilizeStore;
