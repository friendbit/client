import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { createStore } from 'redux'

import Login from './src/pages/Login';
import rootReducer from './src/reducers'

export default class App extends React.Component {
  state = {
    store: createStore(rootReducer)
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <Login />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

