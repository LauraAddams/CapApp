/* eslint-disable */

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import SearchResults from './ProductResult';

function url(input) {
  input = input.replace(new RegExp(' ', 'g'), '+');
  return 'https://skincare-api.herokuapp.com/product?q=' + input;
}

export default class CompareProduct extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      searchString1: 'Benton Aloe BHA skin toner',
      searchString2: 'Goodal Silky plus soothing',
      isLoading: false,
      message: '',
      selectedTab: 'welcome',
      textInput: []
    };
  }

  _addInput = (key) => {
    let textInput = this.state.textInput;
    textInput.push(<TextInput key={key} style={styles.searchInput}/>);
    this.setState({ textInput })
  };

  _onSearchTextChanged = (event) => {
    this.setState({ searchString1: event.nativeEvent.text });
  };

  _onSearch2TextChanged = (event) => {
    this.setState({ searchString2: event.nativeEvent.text });
  };

  _onSearchPressed = () => {
    const query1 = url(this.state.searchString1);
    const query2 = url(this.state.searchString2);
    this._query(query1);
    this._query(query2);
  };

  _query = (query) => {
    this.setState({ isLoading: true });
    fetch(query)
    .then(response => response.json())
    .then(json => this._response(json))
    .catch(error =>
      this.setState({
        isLoading: false,
        message: 'An error occured' + error
      })
    );
  };

  _response = (response) => {
    this.setState({ isLoading: false, message: ''});
    if (response.length) {
      this.props.navigator.push({
        title: 'Results',
        component: SearchResults,
        passProps: {products: response}
      });
    } else {
      this.setState({ message: 'No results. Please try again.'});
    }
  };

  render() {
    const spinner = this.state.isLoading ?
    <ActivityIndicator size='large'/> : null;
    return (
      <View style={styles.container}>

        <Text style={styles.description}>
        COMPARE PRODUCTS
        </Text>

        <View style={styles.flowRight}>

          <TextInput
          style={styles.searchInput}
          value={this.state.searchString1}
          onChange={this._onSearchTextChanged}
          placeholder='Product 1'/>

          <TextInput
          style={styles.searchInput}
          value={this.state.searchString2}
          onChange={this._onSearch2TextChanged}
          placeholder='Product 2'/>

        <TouchableOpacity
          onPress={() => this._addInput(this.state.textInput.length)}
          style={styles.addInput}
          underlayColor='#fff'>
          <Text style={styles.addText}>+</Text>
          {this.state.textInput.map((value, index) => {
            return value
          })}
        </TouchableOpacity>

          <Button
          onPress={this._onSearchPressed}
          color='#333333'
          title='COMPARE'
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
  addInput: {
    alignItems: 'flex-end',
  },
  addText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    backgroundColor: '#000000',
    width: 22,
    paddingBottom: 2,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 11,
    overflow: 'hidden'
  }
});
