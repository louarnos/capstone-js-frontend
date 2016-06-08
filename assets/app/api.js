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

module.exports = {
  eventfulSearch,
  addEvent,
};
