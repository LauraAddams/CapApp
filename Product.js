/*eslint-disable*/
'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';

export default class ProductSingle extends Component<{}> {

  render() {
    const item = this.props.products;
    const name = item.name[0].toUpperCase() + item.name.slice(1);

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.small}>{item.brand.toUpperCase()}</Text>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.subheader}>
            <Text style={styles.small}>100% ACCURATE</Text>
            <Text style={styles.small}>+ MY ROUTINE</Text>
          </View>
        </View>
        <View style={styles.list}>
          <FlatList
            automaticallyAdjustContentInsets={false}
            keyExtractor={(item, index) => index}
            data={item.ingredient_list}
            renderItem={({item}) => <Text style={styles.ing}>{item}</Text>}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 85,
    padding: 20
  },
  subheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  small: {
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 2,
    color: '#333333',
  },
  name: {
    fontWeight: '200',
    fontSize: 22,
    color: '#333333',
    paddingTop: 13,
    paddingBottom: 13
  },
  ing: {
    fontWeight: '200',
    fontSize: 18,
    color: '#333333',
    padding: 8,
  },
  list: {
    height: 400,
    paddingLeft: 20,
    marginTop: 27,
    marginBottom: 27
  },
});
