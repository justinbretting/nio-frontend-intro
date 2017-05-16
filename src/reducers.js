
import { combineReducers } from 'redux';
import rxupdate from 'immutability-helper';

/*
For complex implementations, you can do something like the following:

export default combineReducers({ ui, tabs, schedules, etc });
*/

module.exports = function(state, action) {
  if ( typeof state === 'undefined' ) {
    return {
      orders: [],
      activeCartId: undefined
    }
  }

  switch (action.type) {
    case 'ADD_ORDER':
      // limit the number of items displayed to the most recent 20
      let orders = state.orders.slice(0, 19);
      orders.unshift(action.order);

      return rxupdate(state, {
        orders: {$set: orders}
      })
    case 'TOGGLE_ACTIVE_CART_ID':
      return rxupdate(state, {
        activeCartId: {$set: action.cartId === state.activeCartId ? undefined : action.cartId }
      })
    default:
      return state
  }
}
