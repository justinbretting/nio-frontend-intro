
import React from 'react';
import { connect } from 'react-redux';

// import nio from 'niojs';
import actions from './actions';
import _ from 'lodash';

class App extends React.Component {
  componentWillMount() {
    nio.source
      .socketio('//eval.socket.nio.works', ['groceries'])
      .pipe(nio.func(props => {
        console.log('Received Event', props);
        this.props.dispatch(actions.addOrder(props));
      }))
  }

  render() {
    return <div>Some Text</div>
  }
}

module.exports = connect(state => state)(App)
