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
      <View>
        <Card>
          <Icon name="home" />
        </Card>
        <Card containerStyle={{ borderStyle: 'dashed', backgroundColor: '#eee' }}>
          <Icon name="add" />
        </Card>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  swiperContainer: {
    height: 130,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  simg: {
    width,
    flex: 1,
  },
  hotContainer: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  himg: {
    height: 100,
    marginBottom: 10,
    // width: '100%',
  },
});

export default HomeScreen;
