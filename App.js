/* eslint-disable */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
} from 'react-native';

import SearchProduct from './SearchProduct';
import Index from './Index';
import SearchIngredients from './TaggedIngredient';
import AddProduct from './AddProduct';
import CompareProduct from './CompareProduct';

export default class App extends Component<{}> {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Skincare App',
          component: Index,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
