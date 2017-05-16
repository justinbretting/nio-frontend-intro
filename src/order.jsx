import Shopper from './shopper.jsx';
import CartSummary from './cart-summary.jsx';
import Amount from './amount.jsx';

class Order extends React.Component {
  render() {
    const { shopper, amount, cart } = this.props;

    return (
      <li className="list-group-item order">
        <Shopper {...shopper} />
        <CartSummary {...this.props} />
        <Amount amount={amount} />
      </li>
    )
  }
}

export default Order;
