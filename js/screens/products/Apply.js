import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { AppHeader } from '../../components';

@connect()
class ApplyScreen extends Component {
  constructor() {
    super();
  }

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <AppHeader
          navigation={navigation}
          title="发起项目"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  fragments: {
    marginBottom: 15,
  },
  title: {
    textAlign: 'center',
    lineHeight: 20,
  },
  desc: {
    lineHeight: 20,
  },
  tCenter: {
    textAlign: 'center',
  },
});

export default ApplyScreen;
