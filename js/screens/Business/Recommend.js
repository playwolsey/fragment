import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { AppHeader } from '../../components';
import HaveProcessedScreen from './RecommendHaveProcessed';

// 已落单页面
const HaveSuccessScreen = () => {
  return (
    <View>
      <Text style={styles.welcomeEvent}>
        我今见闻得受持
      </Text>
      <Text style={styles.welcomeEvent}>
        我今见闻得受持
      </Text>
      <Text style={styles.welcomeEvent}>
        我今见闻得受持
      </Text>
    </View>
  );
};

// 待处理页面
const WaitProcessedScreen = () => {
  return (
    <View>
      <Text style={styles.welcomeEvent}>
        无上甚深微妙法
      </Text>
      <Text style={styles.welcomeEvent}>
        无上甚深微妙法
      </Text>
      <Text style={styles.welcomeEvent}>
        无上甚深微妙法
      </Text>
    </View>
  );
};


class RecommendScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
        <AppHeader
          navigation={navigation}
          title="我的推荐"
        />
        <ScrollableTabView
          style={{ marginTop: 0, alignItems: 'center' }}
          initialPage={0}
          tabBarUnderlineStyle={{ backgroundColor: '#00acff' }}
          tabBarActiveTextColor="#00acff"
          renderTabBar={() => <DefaultTabBar />}
        >
          <View tabLabel="待处理">
            <WaitProcessedScreen />
          </View>
          <View tabLabel="已处理">
            <HaveProcessedScreen />
          </View>
          <View tabLabel="已落单">
            <HaveSuccessScreen />
          </View>
        </ScrollableTabView>
      </ScrollView>
    );
  }
}

export default RecommendScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: 40,
  },
  welcomeEvent: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 50,
    color: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
