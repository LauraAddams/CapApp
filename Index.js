/* eslint-disable */

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

import SearchPage from './SearchProduct';
import SearchIngredients from './TaggedIngredient';
import AddProduct from './AddProduct';

export default class Index extends Component<{}> {
  _onPressSearchMore = () => {
    this.props.navigator.push({
      component: SearchPage,
    });
  };

  _onPressIng = () => {
    this.props.navigator.push({
      component: SearchIngredients,
    });
  };

  _onPressAdd = () => {
    this.props.navigator.push({
      component: AddProduct,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={this._onPressSearchMore}
          underlayColor='#fff'>
          <Text style={styles.submitText}>Search Products</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.homeButton}
          onPress={this._onPressIng}
          underlayColor='#fff'>
          <Text style={styles.submitText}>Tagged Ingredients</Text>
        </TouchableOpacity>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={this._onPressAdd}
        underlayColor='#fff'>
        <Text style={styles.submitText}>Add Product</Text>
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 300,
    flex: 1,
  },
  homeButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#000000',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  submitText:{
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
  }
});
