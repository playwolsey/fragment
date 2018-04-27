import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { AppHeader, ShareDialog } from '../../components';

@connect()
class DetailScreen extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      isShowSharePop: false, //分享弹窗，默认不显示
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    if (selectedIndex === 0) {
      this.setState({ isShowSharePop: !this.state.isShowSharePop });
    } else {
      this.props.navigation.navigate('Apply');
    }
    this.setState({ selectedIndex });
  }

  render() {
    const { navigation } = this.props;
    const { productName } = navigation.state.params;
    const buttons = ['推荐产品', '立即申请'];
    const { selectedIndex, isShowSharePop } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <AppHeader
          navigation={navigation}
          title={productName}
        />
        <ScrollView style={styles.container}>
          <View style={styles.fragments}>
            <Text style={styles.title}>产品概述</Text>
            <Text style={styles.desc}>提供用于购买上市公司非公开发行（定增）股权的短期融资服务。</Text>
          </View>
          <View style={styles.fragments}>
            <Text style={styles.title}>产品特色</Text>
          </View>
          <View style={styles.fragments}>
            <Text style={styles.title}>业务范围</Text>
            <Text style={[styles.desc, styles.tCenter]}>全国</Text>
          </View>
          <View style={styles.fragments}>
            <Text style={styles.title}>申请条件</Text>
            <Text style={styles.desc}>1、借款用于购买上市公司非公开发行（定增）股票，还款来源为以股票在券商、银行或其他金融机构的质押融资款；</Text>
          </View>
          <View style={styles.fragments}>
            <Text style={styles.title}>申请资料</Text>
            <Text style={styles.desc}>1、项目真实性证明材料（上市公司懂事会、股东会决议、</Text>
          </View>
        </ScrollView>
        <View style={styles.btnContainer}>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ height: 40, margin: 0, padding: 0 }}
          />
        </View>
        <ShareDialog
          show={isShowSharePop}
          closeModal={(show) => {
            this.setState({ isShowSharePop: show });
          }}
          {...this.props}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  fragments: {
    marginBottom: 15,
  },
  title: {
    textAlign: 'center',
    lineHeight: 20,
  },
  desc: {
    lineHeight: 20,
  },
  tCenter: {
    textAlign: 'center',
  },
  btnContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default DetailScreen;
