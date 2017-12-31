/* eslint-disable */
import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';

import ProductSingle from './Product';

function url(id) {
  return 'https://skincare-api.herokuapp.com/products/' + id;
}

class ListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.item.id);
  }

  render() {
    const item = this.props.item;
    const name = item.name[0].toUpperCase() + item.name.slice(1);

    return (
      <TouchableHighlight
        onPress={this._onPress}
        underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.brand}>{item.brand.toUpperCase()}</Text>
              <Text style={styles.name}
                numberOfLines={1}>{name}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }
}

export default class ProductResult extends Component<{}> {
  _keyExtractor = (item, index) => index;

  _render = ({item, index}) => (
    <ListItem
      item={item}
      index={index}
      onPressItem={this._onPressItem}
    />
  );

  _onPressItem = (id) => {
    this._query(url(id));
  };

  _query = (query) => {
    fetch(query)
    .then(response => response.json())
    .then(json => this._response(json))
    .catch(error =>
      this.setState({
        message: 'Something bad happened ' + error
      }));
    };

  _response = (response) => {
    if (response) {
      this.props.navigator.push({
        component: ProductSingle,
        passProps: {products: response}
      });
    } else {
      this.setState({ message: 'Not recognized; please try again.'});
    }
  };

  render() {
    return (
      <FlatList
        data={this.props.products}
        keyExtractor={this._keyExtractor}
        renderItem={this._render}
      />
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#f5f5f5'
  },
  brand: {
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 3,
    paddingBottom: 5,
    color: '#333333'
  },
  name: {
    fontWeight: '200',
    fontSize: 22,
    color: '#333333'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 20
  },
});
