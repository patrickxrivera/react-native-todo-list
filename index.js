import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import App from './containers/App';

const client = new ApolloClient();

export default class extends Component {
  render() {
    return (
      <Provider>
        <App />
      </Provider>
    );
  }
}
