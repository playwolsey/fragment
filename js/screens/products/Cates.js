import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

@connect()
class ProductsScreen extends Component {
  constructor() {
    super();
  }

  render() {
    // const { navigation } = this.props;

    return (
      <View>
        <Text style={{ fontSize: 30 }}>xxx</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default ProductsScreen;
