import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

@connect()
class ProductsScreen extends Component {
  constructor() {
    super();
  }

  render() {
    // const { navigation } = this.props;

    return (
      <View>
        <Text>xxx</Text>
      </View>
    );
  }
}

export default ProductsScreen;
