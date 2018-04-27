import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { AppHeader } from '../../components';

// 全部借款人页面
const TotalBorrowerScreen = () => {
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

// 认证通过借款人页面
const AuthBorrowerScreen = () => {
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

// 认证失败借款人页面
const FailBorrowerScreen = () => {
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

// 借款人页面
class BorrowerScreen extends Component {
  borrowerManagement = () => {
    console.info(8888, 'ok');
  };

  render() {
    const { navigation } = this.props;
    console.log(navigation);

    return (
      <ScrollView style={styles.container}>
        <AppHeader
          navigation={navigation}
          title="借款人"
        />
        <SearchBar
          lightTheme
          onChangeText={this.borrowerManagement()}
          onClearText={this.borrowerManagement()}
          placeholder=""
        />
        <ScrollableTabView
          style={{ marginTop: 0, alignItems: 'center' }}
          initialPage={0}
          tabBarUnderlineStyle={{ backgroundColor: '#00acff' }}
          tabBarActiveTextColor="#00acff"
          renderTabBar={() => <DefaultTabBar />}
        >
          <View tabLabel="全部">
            <TotalBorrowerScreen />
          </View>
          <View tabLabel="认证通过">
            <AuthBorrowerScreen />
          </View>
          <View tabLabel="认证失败">
            <FailBorrowerScreen />
          </View>
        </ScrollableTabView>
      </ScrollView>
    );
  }
}

export default BorrowerScreen;

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
