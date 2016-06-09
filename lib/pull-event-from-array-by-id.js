'use strict';

const popEventById = (array, id) => {
  let result;
  array.forEach(function (concert) {
      if(concert.id === id) {
        result = concert;
      }
    });
  return result;
};

module.exports = popEventById;
