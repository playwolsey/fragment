import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  Alert,
  StyleSheet,
  Dimensions,
  Text,
  Image,
} from 'react-native';

import {
  weiboIcon,
  weixinIcon,
  friendsIcon,
  qqIcon,
  zoneIcon,
  copyIcon,
  qrcodeIcon,
} from './baseIcons';

const { width, height } = Dimensions.get('window');
const dialogH = 190;

export default class ShareDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: this.props.show,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isVisible: nextProps.show });
  }

  closeModal() {
    this.setState({
      isVisible: false,
    });
    this.props.closeModal(false);
  }

  renderDialog() {
    return (
      <View style={styles.modalStyle}>
        <Text style={styles.text}>分享</Text>
        <View style={{ flex: 1, flexDirection: 'row', marginTop: 13 }}>
          <TouchableOpacity style={styles.item} onPress={() => Alert.alert('分享到微信朋友圈')}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={{ uri: weiboIcon }}
            />
            <Text>微博</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={{ uri: weixinIcon }}
            />
            <Text>微信好友</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={{ uri: friendsIcon }}
            />
            <Text>朋友圈</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={{ uri: qqIcon }}
            />
            <Text>QQ</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', marginTop: 100 }}>
          <TouchableOpacity style={styles.item}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={{ uri: zoneIcon }}
            />
            <Text>QQ空间</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={{ uri: copyIcon }}
            />
            <Text>复制链接</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={{ uri: qrcodeIcon }}
            />
            <Text>二维码</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} />
        </View>
      </View>
    );
  }

  render() {
    return (
      <Modal
        transparent={true}
        visible={this.state.isVisible}
        animationType="slide"
        onRequestClose={() => this.closeModal()}
      >
        <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPress={() => this.closeModal()}
        >
          {this.renderDialog()}
        </TouchableOpacity>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  modalStyle: {
    position: 'absolute',
    top: height - 272,
    left: 0,
    width,
    height: dialogH,
    backgroundColor: '#fff',
  },
  text: {
    flex: 1,
    fontSize: 15,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  item: {
    width: width / 4,
    height: 100,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
});
