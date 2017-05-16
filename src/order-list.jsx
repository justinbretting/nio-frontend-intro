import Order from './order.jsx';
import _ from 'lodash';

class OrderList extends React.Component {
  render() {
    return (
      <ul>
        {_.map(this.props.orders, order => {
          return <Order {...order} />
        })}
      </ul>
    )
  }
}

export default OrderList;
