import React, { Component } from 'react';
import {
  View,
  WebView,
  StyleSheet,
} from 'react-native';
import { AppHeader } from '../components';

const WEBVIEW_REF = 'webview';
const DEFAULT_URL = 'https://www.baidu.com';

class WebviewScreen extends Component {
  render() {
    const { navigation } = this.props;
    const { title } = navigation.state.params;

    return (
      <View style={styles.container}>
        <AppHeader
          navigation={navigation}
          title={title}
        />
        <WebView
          ref={WEBVIEW_REF}
          style={{ flex: 1 }}
          source={{ uri: DEFAULT_URL }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default WebviewScreen;
