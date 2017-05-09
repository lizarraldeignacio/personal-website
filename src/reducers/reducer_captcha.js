import {
        VERIFY_RECAPTCHA }
from '../actions/types';

export default function(state = {recaptcha: false}, action) {
  switch (action.type) {

    case VERIFY_RECAPTCHA:
      return { ...state, recaptcha: action.payload.data.success };

    default:
      return state;
  }
}
