import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { Card, Icon } from 'react-native-elements';

@connect()
class HomeScreen extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.ttcontainer}>
        <Card containerStyle={{ backgroundColor: '#04b5c6' }}>
          <Icon name="settings" color="#fff" />
        </Card>
        <Card containerStyle={{ borderStyle: 'dashed', borderColor: '#999', backgroundColor: '#f0f1f5' }}>
          <Icon name="add" color="#999" />
        </Card>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  ttcontainer: {
    backgroundColor: '#f0f1f5',
    height: 400,
  },
});

export default HomeScreen;
