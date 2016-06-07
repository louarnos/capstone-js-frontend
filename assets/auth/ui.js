'use strict';

const app = require('../app-data.js');
const authApi = require('./api.js');


const signOutSuccess = (data) => {

};



const signInSuccess = (data) => {
  console.log(data);
  console.log('signed-in');
};

const changePWSuccess = (data) => {

};

const changePWFail = (error) => {

};

const regSuccess = (data) => {
  console.log(data);
  app.user = data;
  $('sign-up-form').hide();
};



const signInFail = (error) => {
  console.log(Error);
  console.log('sign-in-failed');
};

const regFail = (error) => {
  console.log(error);
};

const failure = (error) => {
  console.log(error);
};

const success = (data) => {
  console.log(data);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePWSuccess,
  regSuccess,
  signInFail,
  regFail,
  changePWFail
};
