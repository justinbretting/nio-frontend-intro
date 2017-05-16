
class CartItem extends React.Component {
  render() {
    const { type, name, quantity } = this.props;

    return (
      <li className="cart-item list-group-item">
        <span>{name}</span>
        <span className="badge">{quantity}</span>
      </li>
    )
  }
}

export default CartItem;
