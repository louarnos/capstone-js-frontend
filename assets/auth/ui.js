'use strict';

const app = require('../app-data.js');
const authApi = require('./api.js');
const authUi = require('./ui.js');

const signOutSuccess = (data) => {
  console.log('signed-out', data);
  $('#nav-sign-up').removeClass('hidden');
  $('#nav-sign-in').removeClass('hidden');
  $('#nav-sign-out').addClass('hidden');
  $('#nav-change-password').addClass('hidden');
  $('#eventful-search-form').addClass('hidden');
  $('#user-nav').addClass('hidden');
  $('#nav-edit-user').addClass('hidden');
  $('#edit-profile-form').addClass('hidden');
  $('.bs-example').addClass('hidden');
  $('#sign-in-form').each(function(){
    this.reset();
  });
  $('#sign-up-form').each(function(){
    this.reset();
  });
  $('#eventful-search-form').each(function(){
    this.reset();
  });
  $('#change-password-form').each(function(){
    this.reset();
  });
  $('#edit-profile-form').each(function(){
    this.reset();
  });
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
  $('#user-nav').removeClass('hidden');
  $('#nav-edit-user').removeClass('hidden');
  $('#sign-in-form').each(function(){
    this.reset();
  });
};

const changePWSuccess = (data) => {
  console.log(data);
  $('#change-password-form').each(function(){
    this.reset();
  });
};

const changePWFail = (error) => {
  console.log(error);
  $('#pw-change-fail-notification').removeClass('hidden');

  setTimeout(function(){
    $('#pw-change-fail-notification').addClass('hidden');
  }, 2000);

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
  $('#sign-up-form').each(function(){
    this.reset();
  });
};



const signInFail = (error) => {
  console.log(Error);
  console.log('sign-in-failed');
  $('#sign-in-fail-notification').removeClass('hidden');

  setTimeout(function(){
    $('#sign-in-fail-notification').addClass('hidden');
  }, 2000);
};

const regFailure = (error) => {
  console.log(error);
  $('#sign-up-fail-notification').removeClass('hidden');

  setTimeout(function(){
    $('#sign-up-fail-notification').addClass('hidden');
  }, 2000);
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
