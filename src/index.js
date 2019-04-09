import React                from 'react';
import ReactDOM             from 'react-dom';
import { Provider }         from 'react-redux';
import configureStore       from './store/configureStore';
import InTheMiddleContainer from './components/InTheMiddleContainer';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <InTheMiddleContainer />
  </Provider>,
  document.getElementById('root')
);