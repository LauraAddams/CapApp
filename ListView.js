/* eslint-disable */
import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';


class ListItem extends React.PureComponent {

  render() {
    const item = this.props.item;
    const name = item.ingredient[0].toUpperCase() + item.ingredient.slice(1);

    return (
      <TouchableHighlight
        onPress={this._onPress}
        underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
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

export default class SearchResults extends Component<{}> {
  _keyExtractor = (item, index) => index;

  _render = ({item, index}) => (
    <ListItem
      item={item}
      index={index}
      onPressItem={this._onPressItem}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.ingredients}
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
