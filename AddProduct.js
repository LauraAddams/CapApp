/* eslint-disable */

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';

import SearchResults from './ProductResult';

function url(brand, name, ing) {
  brand = brand.replace(new RegExp(' ', 'g'), '+');
  name = name.replace(new RegExp(' ', 'g'), '+');
  ing = ing.replace(new RegExp(' ', 'g'), '+');

  return `https://skincare-api.herokuapp.com/products?brand=${brand}&name=${name}&ingredients=${ing}`;
}

export default class AddProduct extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      addBrand: 'Generic',
      addName: 'Mixed Spritz',
      addIng: 'Jojoba Oil, Rose Water, Water',
      isLoading: false,
      message: '',
      selectedTab: 'welcome'
    };
  }

  _onBrandTextChanged = (event) => {
    this.setState({ addBrand: event.nativeEvent.text });
  };

  _onNameTextChanged = (event) => {
    this.setState({ addName: event.nativeEvent.text });
  };

  _onIngTextChanged = (event) => {
    this.setState({ addIng: event.nativeEvent.text });
  };

  _onButtonPress = () => {
    const query = url(this.state.addBrand, this.state.addName, this.state.addIng);
    this._query(query);
  };

  _query = (query) => {
    this.setState({ isLoading: true });
    fetch('https://skincare-api.herokuapp.com/products', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        brand: this.state.addBrand,
        name: this.state.addName,
        ingredients: this.state.addIng,
      })
    })

    .catch(error =>
      this.setState({
        isLoading: false,
        message: 'An error occured' + error
      })
    );
  };

  render() {
    const spinner = this.state.isLoading ?
    <ActivityIndicator size='large'/> : null;
    return (
      <View style={styles.container}>

        <Text style={styles.description}>
        ADD PRODUCT
        </Text>

        <View style={styles.flowRight}>

          <TextInput
          style={styles.searchInput}
          value={this.state.addBrand}
          onChange={this._onBrandTextChanged}
          placeholder='Brand'/>

          <TextInput
          style={styles.searchInput}
          value={this.state.addName}
          onChange={this._onNameTextChanged}
          placeholder='Name'/>

          <TextInput
          style={styles.searchInput}
          value={this.state.addIng}
          onChange={this._onIngTextChanged}
          placeholder='Ingredients'/>

          <Button
          onPress={this._onButtonPress}
          color='#333333'
          title='GO'
          />

        </View>
        {spinner}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 3,
    paddingBottom: 5,
    color: '#333333',
    marginBottom: 10
  },
  container: {
    padding: 30,
    marginTop: 85,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  searchInput: {
    fontWeight: '200',
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: '#333333',
    color: '#333333',
  },
});
