import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { Icon, Header } from 'react-native-elements';
import { Loading } from '../../components';

/**
 * ******************************业务模块********************************
 * ****
 * */
export default class BusinessScreen extends Component {
  borrowerManagement = () => {
  };

  // 公用的跳转方法
  TouchableHighlightCommon = (navigation, pathName, iconName, iconText) => {
    return (
      <View style={styles.businessItemSubtitle}>
        <TouchableHighlight
          underlayColor="#FFF"
          onPress={() => {
            Loading('show');
            navigation.navigate(pathName);
          }}
        >
          <View>
            <Icon style={styles.icon} name={iconName} size={25} />
            <Text style={styles.contentItem}>
              {iconText}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
        <View>
          <Header
            backgroundColor="#00acff"
            centerComponent={{
              text: '业务',
              style: {
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
                alignSelf: 'center',
                marginTop: 20,
              },
            }}
          />
        </View>
        <View style={styles.businessItem}>
          {this.TouchableHighlightCommon(navigation, 'Borrower', 'person', '借款人')}
          {this.TouchableHighlightCommon(navigation, 'Cates', 'list', '发起项目')}
          {this.TouchableHighlightCommon(navigation, 'Project', 'layers', '项目')}
          {this.TouchableHighlightCommon(navigation, 'Recommend', 'reorder', '我的推荐')}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#F5FCFF',
  },
  business: {
    height: 70,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#08ABFF',
  },
  businessItem: {
    flex: 1,
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#FFF',
  },
  businessItemOnPress: {
    backgroundColor: '#fff',
  },
  contentItem: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },
  businessItemSubtitle: {
    flex: 1,
    width: 80,
    height: 40,
    alignSelf: 'center',
  },
  icon: {
    width: 22,
    height: 22,
    backgroundColor: '#00acff',
  },
});
