import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase';
import reducerCaptcha from './reducer_captcha';

const rootReducer = combineReducers({
  form: formReducer,
  firebase: firebaseStateReducer,
  login: reducerCaptcha
});

export default rootReducer;
