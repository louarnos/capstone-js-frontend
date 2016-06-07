'use strict';

const app = require('../app-data.js');
const authApi = require('../auth/api.js');
const authUi = require('../auth/ui.js')
const appApi = require('./api.js');
const loadSearchResults = require('../template/search-results.handlebars');

const eventfulSearchSuccess = (data) => {
  console.log(data);
  app.eventfulSearchResults = data.eventful_event;
  // app.eventfulSearchResults.forEach( function(concert, index, array){
  //   console.log($.parseHTML(concert.description));
  //
  // });
  console.log(app.eventfulSearchResults);
  $('#main-content').append(loadSearchResults({
    events: app.eventfulSearchResults
  }));
};

const eventfulSearchFailure = (data) => {
  console.log(data);
  app.eventfulSearchResults = data;
};

module.exports = {
  eventfulSearchSuccess,
  eventfulSearchFailure,
};
