'use strict';

// const getFormFields = require('../../../lib/get-form-fields');
const app = require('../app-data.js');
const authApi = require('./api.js');
const authUi = require('./ui.js');

const addHandlers = () => {
  $('#sign-up-form').on('submit', function (event) {
    debugger;
    event.preventDefault();
    let data = getFormFields(this);
    app.signUpData = getFormFields(this);
    authApi.signUp(authUi.regSuccess, authUi.regFailure, data);
  });
  $('#sign-in-form').on('submit', function(event) {
    event.preventDefault();
    let data = getFormFields(this);
    authApi.signIn(authUi.signInSuccess, authUi.signInFail, data);
  });
  $('#nav-sign-out').on('click', function(event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
  $('#change-pw').on('submit', function(event) {
    event.preventDefault();
    let data = getFormFields(this);
    authApi.changePW(authUi.changePWSuccess, authUi.changePWFail, data);
  });
};

module.exports = {
  addHandlers
};
