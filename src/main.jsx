import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import actions from './actions';
import _ from 'lodash';

var store = createStore(
  reducers,
  applyMiddleware(thunk) // lets us dispatch() complex functions for multi-step actions
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("app")
)
