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
      <View style={styles.container}>
        <Card containerStyle={{ backgroundColor: '#04b5c6' }}>
          <Icon name="settings" color="#fff" />
        </Card>
        <Card containerStyle={{ borderStyle: 'dashed', backgroundColor: '#f0f1f5' }}>
          <Icon name="add" />
        </Card>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f1f5',
  },
});

export default HomeScreen;
