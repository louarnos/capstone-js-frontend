'use strict';

const app = require('../app-data.js');
const authApi = require('./api.js');
const authUi = require('./ui.js')

const signOutSuccess = (data) => {
  console.log('signed-out', data);
  $('#nav-sign-up').removeClass('hidden');
  $('#nav-sign-in').removeClass('hidden');
  $('#nav-sign-out').addClass('hidden');
  $('#nav-change-password').addClass('hidden');
  $('#eventful-search-form').addClass('hidden');
};

const signInSuccess = (data) => {
  console.log(data);
  console.log('signed-in');
  app.user = data.user;
  $('#sign-in-form').addClass('hidden');
  $('#eventful-search-form').removeClass('hidden');
  $('#nav-sign-up').addClass('hidden');
  $('#nav-sign-in').addClass('hidden');
  $('#nav-sign-out').removeClass('hidden');
  $('#nav-change-password').removeClass('hidden');
};

const changePWSuccess = (data) => {

};

const changePWFail = (error) => {

};

const regSuccess = (data) => {
  console.log(data);
  app.user = data.user;
  authApi.signIn(signInSuccess, signInFail, app.credentials);
  $('#sign-up-form').addClass('hidden');
  $('#sign-in-form').removeClass('hidden');
  $('#nav-sign-up').addClass('hidden');
  $('#nav-sign-in').addClass('hidden');
  $('#nav-sign-out').removeClass('hidden');
  $('#nav-change-password').removeClass('hidden');
};



const signInFail = (error) => {
  console.log(Error);
  console.log('sign-in-failed');
};

const regFailure = (error) => {
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
  regFailure,
  changePWFail
};
