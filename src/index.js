import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase'

import App from './components/app';
import reducers from './reducers';
import rootReducer from './reducers/index'

// Firebase config
const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  storageBucket: ''
}


// Add redux Firebase to compose
const createStoreWithFirebase = compose(
  reactReduxFirebase(config, { }),
)(createStore)

const store = createStoreWithFirebase(rootReducer)

ReactDOM.render(
  <Provider store={createStoreWithFirebase(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
