import Cart from './cart.jsx';

class CartSummary extends React.Component {
  constructor(props) {
    super(props);

    this._toggleCart = this._toggleCart.bind(this);

    this.state = {
      showCart: false
    }
  }

  _toggleCart() {
    this.setState({
      showCart: !this.state.showCart
    })
  }

  render() {
    const { cart } = this.props;

    return (
      <div className="cart-summary">
        <span className="item-count">{cart.length}</span>
        <span>Items in Cart</span>
        <a onClick={this._toggleCart}><i className="fa fa-list-ul" /></a>
        {this.state.showCart &&
          <Cart items={cart} />
        }
      </div>
    )
  }
}

export default CartSummary;
