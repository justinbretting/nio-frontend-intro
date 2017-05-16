import Shopper from './shopper.jsx';
import CartSummary from './cart-summary.jsx';

class Order extends React.Component {
  render() {
    const { shopper, amount, cart } = this.props;

    return (
      <li className="list-group-item order">
        <Shopper {...shopper} />
        <CartSummary cart={cart} />
        <div className="amount">
          <span>${amount}</span>
        </div>
      </li>
    )
  }
}

export default Order;
