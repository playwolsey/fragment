import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { AppHeader } from '../../components';

class SettingsScreen extends Component {
  render() {
    const { navigation } = this.props;
    console.log(navigation);

    return (
      <View>
        <AppHeader
          navigation={navigation}
          title="设置"
        />
        <List style={styles.container}>
          <ListItem
            key={1}
            title="七桥账号"
          />
          <ListItem
            key={2}
            title="修改头像"
            onPress={() => {
              navigation.navigate('Settings');
            }}
          />
          <ListItem
            key={3}
            title="修改昵称"
          />
          <ListItem
            key={4}
            title="修改密码"
          />
          <ListItem
            key={5}
            title="手势密码设置"
            onPress={() => {
              navigation.navigate('Gesture', { title: '设置手势密码' });
            }}
          />
        </List>
      </View>
    );
  }
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    backgroundColor: 'red',
  },
});
