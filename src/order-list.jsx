import Order from './order.jsx';
import _ from 'lodash';

class OrderList extends React.Component {
  render() {
    return (
      <ul className="list-group order-list panel">
        <li className="list-group-item panel-heading">
          <h4>Order List</h4>
        </li>

        {_.map(this.props.orders, order => {
          return <Order {...order} />
        })}
      </ul>
    )
  }
}

export default OrderList;
