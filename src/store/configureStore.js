import { createStore, applyMiddleware, compose } from 'redux';
import initialState from './initialState';
import rootReducer from '../reducers';

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState
  )
};