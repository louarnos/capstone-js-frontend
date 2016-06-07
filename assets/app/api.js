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

module.exports = {
  eventfulSearch,
};
