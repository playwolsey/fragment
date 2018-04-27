import React, { Component } from 'react';
import {
  StyleSheet,
  PixelRatio,
  Text,
  View,
  TouchableHighlight,
  Platform,
} from 'react-native';
import { Icon } from 'react-native-elements';

// 添加借款人（个人、企业）
class RadiusButton extends Component {
  render() {
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <TouchableHighlight
          underlayColor={this.props.underlayColor}
          onPress={this.props.onPress}
        >
          <View>
            <View style={[styles.center, styles.btnDefaultStyle, this.props.btnStyle]}>
              <Icon
                iconStyle={[styles.iconDefaultColor, this.props.iconColor]}
                name={this.props.iconName}
                size={100}
              />
            </View>
            <View style={styles.borrowerType}>
              <Text style={[this.props.textStyle, styles.borrower]}>
                {this.props.textName}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default RadiusButton;

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDefaultStyle: {
    width: 100,
    height: 100,
    borderColor: 'red',
    borderRadius: 50,
    borderWidth: (Platform.OS === 'ios' ? 1.0 : 1.5) / PixelRatio.get(),
  },
  textDefaultStyle: {
    width: 100,
    height: 100,
    fontSize: 16,
    color: '#ffffff',
  },
  iconDefaultColor: {
    color: '#000',
  },
  icon: {
    width: 60,
    height: 60,
    marginTop: -20,
  },
  borrowerType: {
    marginTop: 20,
  },
  borrower: {
    height: 60,
    fontSize: 30,
  },
});
