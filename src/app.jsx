
import React from 'react';
import { connect } from 'react-redux';

// import nio from 'niojs';
import actions from './actions';
import _ from 'lodash';
import { id } from './lib/id';

import OrderList from './order-list.jsx'

class App extends React.Component {
  componentWillMount() {
    nio.source
      .socketio('//eval.socket.nio.works', ['groceries'])
      .pipe(nio.func(props => {
        // give each order an ID for tracking which one is displaying their items
        props.id = id();
        console.log('Received Event', props);
        this.props.dispatch(actions.addOrder(props));
      }))
  }

  render() {
    return <OrderList orders={this.props.orders} />
  }
}

module.exports = connect(state => state)(App)
