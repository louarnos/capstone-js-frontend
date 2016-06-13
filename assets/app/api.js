'use strict';

const app = require('../app-data.js');

const eventfulSearch = (success, failure, data) => {
  console.log('eventful query queued');
  $.ajax({
    method : 'POST',
      url : app.api + '/eventful',
      data
  }).done(success).fail(failure);
};

const addEvent = (success, failure, data) => {
  console.log('add event queued');
  $.ajax({
    method : 'POST',
      url : app.api + '/events',
      data,
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  }).done(success).fail(failure);
};

const removeEvent = (success, failure, id) => {
  console.log('delete event queued');
  $.ajax({
    method : 'DELETE',
      url : app.api + '/events/' + id,
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  }).done(success).fail(failure);
};

const getOneUser = (success, failure, id) => {
  $.ajax({
    method : 'GET',
      url : app.api + '/users/' + id,
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  }).done(success).fail(failure);
};

const getAllUsers = (success, failure) => {
  $.ajax({
    method : 'GET',
      url : app.api + '/users',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  }).done(success).fail(failure);
};

const addFollowee = (success, failure, data) => {
  $.ajax({
    method : 'PATCH',
      url : app.api + '/add-followee',
      data : {
        followee_id: data
      },
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  }).done(success).fail(failure);
};

const removeFollowee = (success, failure, data) => {
  $.ajax({
    method : 'PATCH',
      url : app.api + '/remove-followee',
      data : {
        followee_id: data
      },
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  }).done(success).fail(failure);
};

const editBio = (success, failure, data) => {
  $.ajax({
    method : 'PATCH',
      url : app.api + '/user-bio',
      data : {
        bio: data
      },
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  }).done(success).fail(failure);
};

const addImg = (success, failure, data) => {
  $.ajax({
    method : 'PATCH',
      url : app.api + '/user-img',
      data : {
        image_url: data
      },
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  }).done(success).fail(failure);
};

module.exports = {
  eventfulSearch,
  addEvent,
  removeEvent,
  getOneUser,
  getAllUsers,
  addFollowee,
  removeFollowee,
  editBio,
  addImg,
};
