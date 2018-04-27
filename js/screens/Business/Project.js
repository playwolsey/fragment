import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { AppHeader } from '../../components';

// 全部项目页面
const TotalProjectScreen = () => {
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

// 风控驳回项目页面
const RejectProjectScreen = () => {
  return (
    <View>
      <Text style={styles.welcomeEvent}>
        百千万劫难遭遇
      </Text>
      <Text style={styles.welcomeEvent}>
        百千万劫难遭遇
      </Text>
      <Text style={styles.welcomeEvent}>
        百千万劫难遭遇
      </Text>
    </View>
  );
};

// 为提交项目页面
const FailProjectScreen = () => {
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

// 项目页面
class ProjectScreen extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={styles.container}>
        <AppHeader
          navigation={navigation}
          title="项目"
        />
        <ScrollableTabView
          style={{ marginTop: 0, alignItems: 'center' }}
          initialPage={0}
          tabBarUnderlineStyle={{ backgroundColor: '#00acff' }}
          tabBarActiveTextColor="#00acff"
          renderTabBar={() => <DefaultTabBar />}
        >
          <View tabLabel="全部">
            <TotalProjectScreen />
          </View>
          <View tabLabel="风控驳回">
            <RejectProjectScreen />
          </View>
          <View tabLabel="未提交">
            <FailProjectScreen />
          </View>
        </ScrollableTabView>
      </ScrollView>
    );
  }
}

export default ProjectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#FFF',
  },
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
});
