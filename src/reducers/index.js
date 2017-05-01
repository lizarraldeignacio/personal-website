import { combineReducers } from 'redux'
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  firebase: firebaseStateReducer
});

export default rootReducer;
