import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

// 已处理全部页面
const TotalHaveProcessedScreen = () => {
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

// 已处理已经委托页面
const CommissionHaveProcessedScreen = () => {
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

// 已处理已发项目页面
const HaveSendProjectScreen = () => {
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

// 已处理无效信息页面
const InvalidInformationScreen = () => {
  return (
    <View>
      <Text style={styles.welcomeEvent}>
        愿解如来真实义
      </Text>
      <Text style={styles.welcomeEvent}>
        愿解如来真实义
      </Text>
      <Text style={styles.welcomeEvent}>
        愿解如来真实义
      </Text>
    </View>
  );
};

// 已处理页面
class HaveProcessedScreen extends Component {
  render() {
    const { navigation } = this.props;
    console.log(navigation);

    return (
      <ScrollView style={styles.container}>
        <ScrollableTabView
          style={{ marginTop: 0, alignItems: 'center' }}
          initialPage={0}
          tabBarUnderlineStyle={{ backgroundColor: '#00acff' }}
          tabBarActiveTextColor="#00acff"
          renderTabBar={() => <DefaultTabBar />}
        >
          <View tabLabel="全部">
            <TotalHaveProcessedScreen />
          </View>
          <View tabLabel="已经委托">
            <CommissionHaveProcessedScreen />
          </View>
          <View tabLabel="已发项目">
            <HaveSendProjectScreen />
          </View>
          <View tabLabel="无效信息">
            <InvalidInformationScreen />
          </View>
        </ScrollableTabView>
      </ScrollView>
    );
  }
}

export default HaveProcessedScreen;

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
