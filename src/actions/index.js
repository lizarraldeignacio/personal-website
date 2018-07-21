import axios from 'axios';
import {
        VERIFY_RECAPTCHA
       } from './types';

const VERIFY_URL = 'https://us-central1-mywebsite-8a1f0.cloudfunctions.net/verifyCaptcha';
const GET_IP_URL = 'https://api.ipstack.com/check';
const IPSTACK_ACCESS_KEY = 'YOUR KEY';

export function verifyReCaptcha(response) {
  const request = axios.get(`${GET_IP_URL}?access_key=${IPSTACK_ACCESS_KEY}`).then(ipResponse => {
    return axios.get(`${VERIFY_URL}?response=${response}&remoteip=${ipResponse.data.ip}`);
  });
  return {
    type: VERIFY_RECAPTCHA,
    payload: request
  };

};
