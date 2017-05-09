import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { reactReduxFirebase } from 'react-redux-firebase'
import { Route, BrowserRouter } from 'react-router-dom'
import routes from './routes';
import reducers from './reducers';
import rootReducer from './reducers/index'

// Firebase config
const config = {
  apiKey: 'AIzaSyCcTpqj24IYJFSzVlkAkh_OVUF6qPDt41M',
  authDomain: 'mywebsite-8a1f0.firebaseapp.com',
  databaseURL: 'https://mywebsite-8a1f0.firebaseio.com/',
  storageBucket: 'mywebsite-8a1f0.appspot.com'
};


// Add redux Firebase to compose
const createStoreWithFirebase = compose(applyMiddleware(ReduxPromise),
  reactReduxFirebase(config, { }),
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithFirebase(reducers)}>
    <BrowserRouter forceRefresh={true}>
      { routes }
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
