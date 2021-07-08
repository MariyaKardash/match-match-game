import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

import { rootReducers } from './reducers';
const initialState = {}

export const store = createStore(
  combineReducers({
    ...rootReducers,
  }),
  initialState,
  compose(
    applyMiddleware(
      thunk,
      reduxLogger
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);