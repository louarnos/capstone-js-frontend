'use strict';

const app = require('../app-data.js');
const appApi = require('./api.js');
const appUi = require('./ui.js');
const displayUserEvents = require('../template/user-events.handlebars');
const findEventById = require('../../lib/pull-event-from-array-by-id.js');

const addHandlers = () => {
  // NAV EVENTS
  $('#nav-sign-up').on('click', function(){
    $('#sign-up-form').removeClass('hidden');
    $('#sign-in-form').addClass('hidden');
    $('#change-password-form').addClass('hidden');
    $('#eventful-search-form').addClass('hidden');
  });
  $('#nav-sign-in').on('click', function(){
    $('#sign-in-form').removeClass('hidden');
    $('#sign-up-form').addClass('hidden');
    $('#change-password-form').addClass('hidden');
    $('#eventful-search-form').addClass('hidden');
  });
  $('#nav-change-password').on('click', function(){
    $('#change-password-form').removeClass('hidden');
    $('#sign-up-form').addClass('hidden');
    $('#sign-in-form').addClass('hidden');
    $('#eventful-search-form').addClass('hidden');
  });

  $("#nav-user-events").on('click', function(){
      $('.bs-example').removeClass('hidden');
      $('html, body').animate({
        scrollTop: $("#content-div").offset().top
      }, 1000);
      $('.nav-tabs a[href="#sectionB"]').tab('show');
  });

  $("#nav-user-friends").on('click', function(){
      $('.bs-example').removeClass('hidden');
      $('html, body').animate({
        scrollTop: $("#content-div").offset().top
      }, 1000);
      $('.nav-tabs a[href="#sectionC"]').tab('show');
  });

  $("#nav-find-all-users").on('click', function(){
      $('.bs-example').removeClass('hidden');
      $('html, body').animate({
        scrollTop: $(".bs-example").offset().top
      }, 1000);
      $('.nav-tabs a[href="#sectionD"]').tab('show');
    });

  // EVENT SEARCH EVENTS
  $('#eventful-search-form').on('submit', function(event){
    event.preventDefault();
    $('#pulse').removeClass('hidden');
    let data = getFormFields(this);
    appApi.eventfulSearch(appUi.eventfulSearchSuccess,
                          appUi.eventfulSearchFailure,
                          data);
    console.log(data);
  });

  // SHOW USER EVENTS HANDLER
  $('.activate-user-events-display').on('click', function(event){
    event.preventDefault();
    $('.user-events-div').html('');
    $('.user-events-div').append(displayUserEvents({
      events: app.user.events
    }));

    $('.remove-event-btn').on('click', function(event){
      event.preventDefault();
      let eventToRemove = findEventById(app.user.events,
                                        this.dataset.eventid);
      appApi.removeEvent(appUi.deleteEventSuccess,
                         appUi.deleteEventFailure,
                         eventToRemove._id);
    });
  });

  $('.show-user-followees').on('click', function(event){
    event.preventDefault();
    $('.user-followees-div').html('');
    app.user.followee.forEach(function(followee){
    appApi.getOneUser(appUi.getFolloweeSuccess,
                      appUi.getFolloweeFailure,
                      followee.followee_id);
      });
    });

  $(document).on('click','.unfollow-btn',function(){
    let id = $(event.target).data('eventid');
    for (let i = 0; i < app.user.followee.length; i++) {
      if (app.user.followee[i].followee_id === id) {
        app.user.followee.splice(i, 1);
      }
    }
    appApi.removeFollowee(appUi.removeFolloweeSuccessTwo,
                          appUi.removeFolloweeFailure,
                          this.dataset.eventid);

    $('.user-followees-div').html('');
    });


  $(document).on('click', '.remove-event-btn', function(event){
    event.preventDefault();
    let eventToRemove = findEventById(app.user.events, this.dataset.eventid);
    appApi.removeEvent(appUi.deleteEventSuccess,
                       appUi.deleteEventFailure,
                       eventToRemove._id);
    });


  // Find New Friends Tab

  $('.find-new-friends-tab').on('click', function(event){
    event.preventDefault();
    appApi.getAllUsers(appUi.getAllUsersSuccess, appUi.getAllUsersFailure);
  });
};

module.exports = {
  addHandlers,
};
