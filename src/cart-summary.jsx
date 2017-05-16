
import Cart from './cart.jsx';
import { connect } from 'react-redux';
import actions from './actions';

class CartSummary extends React.Component {
  constructor(props) {
    super(props);

    this._toggleCart = this._toggleCart.bind(this);
  }

  _toggleCart() {
    this.props.dispatch(actions.toggleActiveCartId(this.props.id));
  }

  render() {
    const { id, cart, activeCartId } = this.props;

    return (
      <div className="cart-summary">
        <span className="item-count">{cart.length}</span>
        <span>Items in Cart</span>
        <a onClick={this._toggleCart}><i className="fa fa-list-ul" /></a>
        {id === activeCartId &&
          <Cart items={cart} />
        }
      </div>
    )
  }
}

export default connect(state => state)(CartSummary);
