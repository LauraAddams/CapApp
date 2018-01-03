/* eslint-disable */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
} from 'react-native';

import SearchProduct from './SearchProduct';
import Index from './Index';

export default class App extends Component<{}> {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Skincare App',
          component: SearchProduct,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
