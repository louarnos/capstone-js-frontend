'use strict';

const app = require('../app-data.js');
const authApi = require('../auth/api.js');
const authUi = require('../auth/ui.js')
const appApi = require('./api.js');

const eventfulSearchSuccess = (data) => {
  console.log(data);
  app.eventfulSearchResults = data;
};

const eventfulSearchFailure = (data) => {
  console.log(data);
  app.eventfulSearchResults = data;
};

module.exports = {
  eventfulSearchSuccess,
  eventfulSearchFailure,
};
