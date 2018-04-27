import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { Loading } from '../../components';

class AppHeader extends Component {
  onPressBack = (navigation) => {
    navigation.goBack();
  };

  // 左边icon
  renderIconLeft = (navigation) => {
    return (
      <View style={{ marginTop: 20 }}>
        <Icon
          name="chevron-left"
          size={50}
          color="#fff"
          reverseColor="#00acff"
          underlayColor="#00acff"
          onPress={() => {
            Loading('show');
            this.onPressBack(navigation);
          }}
        />
      </View>
    );
  };

  // 右边icon
  renderIconRight = (navigation) => {
    return (
      <View style={{ marginTop: 20 }}>
        <Icon
          name="add"
          size={50}
          color="#fff"
          reverseColor="#00acff"
          underlayColor="#00acff"
          onPress={() => {
            Loading('show');
            navigation.navigate('AddBorrower');
          }}
        />
      </View>
    );
  };

  // 头部render只有左边回退按钮
  onlyRenderLeftIcon = (navigation, routerNameTrue) => {
    return (
      <Header
        reverseColor="#00acff"
        underlayColor="#00acff"
        backgroundColor="#00acff"
        leftComponent={this.renderIconLeft(navigation)}
        centerComponent={{
          text: routerNameTrue,
          style: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 20,
            alignSelf: 'center',
          },
        }}
      />);
  };

  // 头部render有左边回退按钮、右边其他功能icon
  renderLeftRightIcon = (navigation, routerNameTrue) => {
    return (
      <Header
        reverseColor="#00acff"
        underlayColor="#00acff"
        backgroundColor="#00acff"
        leftComponent={this.renderIconLeft(navigation)}
        rightComponent={this.renderIconRight(navigation)}
        centerComponent={{
          text: routerNameTrue,
          style: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 20,
            alignSelf: 'center',
          },
        }}
      />);
  };

  render() {
    const { navigation, title } = this.props;
    // let routerNameTrue;
    // const routerName = navigation.state.routeName;
    // switch (routerName) {
    //   case 'Borrower':
    //     routerNameTrue = '借款人';
    //     return (
    //       <View>
    //         {this.renderLeftRightIcon(navigation, routerNameTrue)}
    //       </View>
    //     );
    //   case 'AddBorrower':
    //   case 'AddPersonBorrower':
    //   case 'AddCompanyBorrower':
    //     routerNameTrue = '添加借款人';
    //     break;
    //   case 'Settings':
    //     routerNameTrue = '设置';
    //     break;
    //   case 'Login':
    //     routerNameTrue = '登录';
    //     break;
    //   case 'Project':
    //     routerNameTrue = '项目';
    //     break;
    //   case 'Recommend':
    //     routerNameTrue = '我的推荐';
    //     break;
    //   default:
    //     routerNameTrue = '设置';
    //     break;
    // }

    return (
      <View>
        {this.onlyRenderLeftIcon(navigation, title)}
      </View>
    );
  }
}

export default AppHeader;

const styles = StyleSheet.create({
  business: {
    height: 60,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#08ABFF',
  },
  businessItem: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
  },
  content: {
    fontSize: 14,
    marginTop: 35,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  contentItem: {
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    marginTop: 0,
  },
  userImage: {},
  welcomeEvent: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 100,
    color: '#000',
  },
  welcomeLog: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 100,
    color: '#000',
  },
  welcomeDevice: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 100,
    color: '#000',
  },
  welcomeUser: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 100,
    color: '#000',
  },
  tabText: {
    fontSize: 10,
    color: 'black',
  },
  selectedTabText: {
    fontSize: 10,
    color: 'red',
  },
  icon: {
    width: 22,
    height: 22,
  },
});
