import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

// 用户积分、星级
const listCreditsStarLevel = [
  {
    name: '我的积分',
    icon: 'av-timer',
  },
  {
    name: '我的星级',
    icon: 'star',
  },
];

class MeScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <List containerStyle={{ marginBottom: 20 }}>
          {
            listCreditsStarLevel.map((item, i) => (
              <ListItem
                key={i}
                title={item.name}
                leftIcon={{ name: item.icon }}
              />
            ))
          }
        </List>
        <List>
          <ListItem
            key={1}
            title="银行卡"
            leftIcon={{ name: 'credit-card' }}
          />
          <ListItem
            key={2}
            title="设置"
            leftIcon={{ name: 'settings' }}
            onPress={() => {
              navigation.navigate('Settings');
            }}
          />
          <ListItem
            key={3}
            title="关于"
            leftIcon={{ name: 'home' }}
          />
        </List>
      </View>
    );
  }
}

export default MeScreen;
