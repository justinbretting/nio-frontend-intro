
class Order extends React.Component {
  render() {
    return (
      <li>
        {JSON.stringify(this.props)}
      </li>
    )
  }
}

export default Order;
