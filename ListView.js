/* eslint-disable */
import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Dimensions
} from 'react-native';

const width = Dimensions.get('window').width;


class ListItem extends React.PureComponent {

  render() {
    const item = this.props.item;
    const name = item.ingredient[0].toUpperCase() + item.ingredient.slice(1);

    return (
          <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.name}
                numberOfLines={1}>{name}</Text>
            </View>
            <View style={styles.separator}/>
          </View>
    );
  }
}

export default class ListView extends Component<{}> {
  _keyExtractor = (item, index) => index;

  _render = ({item, index}) => (
    <ListItem
      item={item}
      index={index}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.ingredients}
        keyExtractor={this._keyExtractor}
        renderItem={this._render}
        style={styles.mc}
      />
    );
  }
}

const styles = StyleSheet.create({
  mc: {
  },
  textContainer: {
    justifyContent: 'flex-start'
  },
  separator: {
    height: 1,
    backgroundColor: 'red'
  },
  name: {
    fontWeight: '200',
    fontSize: 22,
    color: '#333333',
    paddingTop: 10,
    paddingBottom: 10
  },
  rowContainer: {
    flexDirection: 'column',
    width: width - 60,
  },
});
