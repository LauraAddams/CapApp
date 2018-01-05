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

export default class Routine extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>My Routine</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightpink',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
