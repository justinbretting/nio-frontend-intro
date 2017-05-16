
import { combineReducers } from 'redux';
import rxupdate from 'immutability-helper';

/*
For complex implementations, you can do something like the following:

export default combineReducers({ ui, tabs, schedules, etc });
*/

module.exports = function(state, action) {
  if ( typeof state === 'undefined' ) {
    return {
      orders: []
    }
  }

  switch (action.type) {
    case 'ADD_ORDER':
      return rxupdate(state, {
        orders: {$push: [action.order]}
      })
    default:
      return state
  }
}
