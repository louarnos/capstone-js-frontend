'use strict';

const app = require('../app-data.js');
const appApi = require('./api.js');
const appUi = require('./ui.js');
const displayUserEvents = require('../template/user-events.handlebars');

// const authApi = require('../api.js');
// const authUi = require('../ui.js');

const addHandlers = () => {
  // NAV EVENTS
  $('#nav-sign-up').on('click', function(){
    $('#sign-up-form').removeClass('hidden');
    $('#sign-in-form').addClass('hidden');
    $('#change-password-form').addClass('hidden');
    $('.logo').addClass('hidden');
  });
  $('#nav-sign-in').on('click', function(){
    $('#sign-in-form').removeClass('hidden');
    $('#sign-up-form').addClass('hidden');
    $('#change-password-form').addClass('hidden');
    $('.logo').addClass('hidden');
  });
  $('#nav-change-password').on('click', function(){
    $('#change-password-form').removeClass('hidden');
    $('#sign-up-form').addClass('hidden');
    $('#sign-in-form').addClass('hidden');
    $('.logo').addClass('hidden');
  });

  // EVENT SEARCH EVENTS
  $('#eventful-search-form').on('submit', function(event){
    event.preventDefault();
    let data = getFormFields(this);
    appApi.eventfulSearch(appUi.eventfulSearchSuccess,
                          appUi.eventfulSearchFailure,
                          data);
    console.log(data);
  });

  // SHOW USER EVENTS HANDLER
  $('.activate-user-events-display').on('click', function(event){
    event.preventDefault();
    $('.user-events-div').html('')
    $('.user-events-div').append(displayUserEvents({
      events: app.user.events
    }));
  });
};

module.exports = {
  addHandlers,
};
