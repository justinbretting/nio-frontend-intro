import CartItem from './cart-item.jsx';

class Cart extends React.Component {
  render() {
    return (
      <ul className="cart list-group">
        {_.map(this.props.items, item => {
          return <CartItem {...item} />
        })}
      </ul>
    )
  }
}

export default Cart;
