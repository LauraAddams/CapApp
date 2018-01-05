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
import CompareProduct from './CompareProduct';
import Routine from './Routine';

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

  _onPressCompare = () => {
    this.props.navigator.push({
      component: CompareProduct,
    });
  };

  _onPressRoutine = () => {
    this.props.navigator.push({
      component: Routine,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.name}>CapApp</Text>
        </View>
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

    <TouchableOpacity
      style={styles.homeButton}
      onPress={this._onPressCompare}
      underlayColor='#fff'>
      <Text style={styles.submitText}>Compare Products</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.homeButton}
      onPress={this._onPressRoutine}
      underlayColor='#fff'>
      <Text style={styles.submitText}>My Routine</Text>
    </TouchableOpacity>
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
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
  },
  name: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    paddingBottom: 100
  }
});
