import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { createStore } from 'redux'

import rootReducer from './src/reducers'
import AppWithNavigationState from './src/core/AppWithNavigationState';


export default class App extends React.Component {
  state = {
    store: createStore(rootReducer)
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <AppWithNavigationState></AppWithNavigationState>
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

