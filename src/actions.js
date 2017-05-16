import _ from 'lodash';
import rxupdate from 'immutability-helper';

/*
 when you need to start breaking up your actions, you can do something like

module.exports = _.extend(ui, groceries, users, etc..., {
 ...
})
*/

module.exports = {
  addOrder(order) {
    return { type: 'ADD_ORDER', order }
  },
  toggleActiveCartId(cartId) {
    return { type: 'TOGGLE_ACTIVE_CART_ID', cartId }
  }
}
