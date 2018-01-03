/* eslint-disable */

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default class Index extends Component<{}> {
  _onPressLearnMore = () => {
    console.log('boo');
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
        onPress={this._onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 300,
    flex: 1,
  },
});
