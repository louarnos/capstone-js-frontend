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
  $('.add-event-btn').on('click', function (event){
    event.preventDefault();
    console.log('clicked');
    let clickedEventID = this.dataset.eventid;
    console.log(clickedEventID);
    let match;
    app.eventfulSearchResults.forEach(function (concert) {
        if(concert.id === clickedEventID) {
          match = concert;
        }
      });
    console.log(match);
    appApi.addEvent(addEventSuccess, addEventFailure, match);
  });
};

const eventfulSearchFailure = (data) => {
  console.log(data);
  app.eventfulSearchResults = data;
};

const addEventSuccess = (data) => {
  console.log(data, 'success event added');
};

const addEventFailure = (data) => {
  console.log(data, 'failure event not added')
};


module.exports = {
  eventfulSearchSuccess,
  eventfulSearchFailure,
  addEventSuccess,
  addEventFailure,
};
