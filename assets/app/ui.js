'use strict';

const app = require('../app-data.js');
const appApi = require('./api.js');
const loadSearchResults = require('../template/search-results.handlebars');
const findEventById = require('../../lib/pull-event-from-array-by-id.js');
const displayUserEvents = require('../template/user-events.handlebars');
const displayAllUsers = require('../template/display-all-users.handlebars');
const displayUserFollowees = require('../template/display-user-followees.handlebars');
const moment = require('moment');

const getOneUserFailure = (data) => {
  console.log('get one user fail');
  console.log(data);

};

const eventfulSearchSuccess = (data) => {
  console.log(data);
  $('.bs-example').removeClass('hidden');
  $('#pulse').addClass('hidden');
  app.eventfulSearchResults = data.eventful_event;
  app.eventfulSearchResults.forEach( function(concert, index, array){
    let converted = concert.description.replace(/"/g,"");
    converted = converted.replace(/<\/?[^>]+(>|$)/g, "");
    converted = converted.replace(/&#39;/g, '');
    if(converted === 'none'){
      converted = '';
    }
    app.eventfulSearchResults[index].description = converted;
  });

  app.eventfulSearchResults.forEach( function(concert, index){
    let convertedDate = moment(concert.start_time);
    convertedDate = convertedDate._d.toString().substring(0,21);
    app.eventfulSearchResults[index].start_time = convertedDate;
  })

  $('#main-content').html(loadSearchResults({
    events: app.eventfulSearchResults
  }));

  $('a[href="' + '#sectionA' + '"]').trigger('click');
  $('#youtube-player').removeClass('hidden');



  $('.add-event-btn').on('click', function (event){
    event.preventDefault();
    $(this).hide()
    let eventToAdd = findEventById(app.eventfulSearchResults, this.dataset.eventid);
    appApi.addEvent(addEventSuccess, addEventFailure, eventToAdd);
  });

  $('html, body').animate({
    scrollTop: $("#content-div").offset().top
}, 1000);
};


const eventfulSearchFailure = (data) => {
  console.log(data);
  app.eventfulSearchResults = data;
};

const addEventSuccess = (data) => {
  console.log(data, 'success event added');
  appApi.getOneUser(getOneUserSuccess, getOneUserFailure, app.user._id);
};

const addEventFailure = (data) => {
  console.log(data, 'failure event not added');
};

const deleteEventSuccess = (data) => {
  console.log(data, 'success event deleted');
  appApi.getOneUser(getOneUserSuccess, getOneUserFailure, app.user._id);
};

const deleteEventFailure = (data) => {
  console.log('failure event not deleted');
  console.log(data);
};

const getOneUserSuccess = (data) => {
  // console.log('get one user success');
  // console.log(data.user, app.user);
  let token = app.user.token;
  app.user = data.user;
  app.user.token = token;
  $('.user-events-div').html('');
  $('.user-events-div').append(displayUserEvents({
    events: app.user.events
  }));

};

const getAllUsersSuccess = (data) => {
  // console.log('got all userss');
  app.allUsers = data.users;
  for(let i = 0; i< app.allUsers.length; i++){
    for(let j = 0; j <app.user.followee.length; j++){
      if(app.user.followee[j].followee_id === app.allUsers[i]._id){
        app.allUsers[i].followed = true;
        // console.log('true', app.allUsers[i]);
      }
    }
  }
  $('.find-new-friends-div').html('');
  $('.find-new-friends-div').append(displayAllUsers({
    users: app.allUsers
  }));

  $('.add-followee-btn').on('click', function(event){
    event.preventDefault();
    console.log(this.dataset.eventid);
    console.log($(this).parent().children('.remove-followee-btn'));

    appApi.addFollowee(addFolloweeSuccess,
                       addFolloweeFailure,
                       this.dataset.eventid);
  });

  $('.remove-followee-btn').on('click', function(event){
    event.preventDefault();
    console.log(this.dataset.eventid);
    appApi.removeFollowee(removeFolloweeSuccess,
                          removeFolloweeFailure,
                          this.dataset.eventid);
  });
};

const getAllUsersFailure = (data) => {
  console.log('got all users failed', data);
};

const addFolloweeSuccess = (data) => {
  console.log(data, 'add followee successful');
  appApi.getOneUser(getOneUserSuccess, getOneUserFailure, app.user._id);
  appApi.getAllUsers(getAllUsersSuccess, getAllUsersFailure);
};

const addFolloweeFailure = (data) => {
  console.log(data, 'add followee failed');
};

const removeFolloweeSuccess = (data) => {
  console.log(data, 'remove followee successful');
  appApi.getOneUser(getOneUserSuccess, getOneUserFailure, app.user._id);
  appApi.getAllUsers(getAllUsersSuccess, getAllUsersFailure);
};

const removeFolloweeFailure = (data) => {
  console.log(data, 'remove followee failed');
};

const getFolloweeSuccess = (data) => {
  console.log('got one followee', data);
  $('.user-followees-div').append(displayUserFollowees({
    followee: data.user
  }));
};



const getFolloweeFailure = (data) => {
  console.log('get one followee failure', data);
};

const removeFolloweeSuccessTwo = (data) => {
  console.log('success followee removed')
  appApi.getOneUser(getOneUserSuccess,
                    getOneUserFailure,
                    app.user._id);
  app.user.followee.forEach(function(followee){
    appApi.getOneUser(getFolloweeSuccess,
                      getFolloweeFailure,
                      followee.followee_id);
                    });
};

const editBioSuccess = (data) => {
  console.log(data);
};

const editBioFailure = (data) => {
  console.log(data);
};

const addImgSuccess = (data) => {
  console.log(data);
};

const addImgFailure = (data) => {
  console.log(data);
};



module.exports = {
  eventfulSearchSuccess,
  eventfulSearchFailure,
  addEventSuccess,
  addEventFailure,
  getOneUserSuccess,
  getOneUserFailure,
  deleteEventSuccess,
  deleteEventFailure,
  getAllUsersSuccess,
  getAllUsersFailure,
  addFolloweeSuccess,
  addFolloweeFailure,
  removeFolloweeSuccess,
  removeFolloweeFailure,
  getFolloweeSuccess,
  getFolloweeFailure,
  removeFolloweeSuccessTwo,
  editBioSuccess,
  editBioFailure,
  addImgSuccess,
  addImgFailure,
};
