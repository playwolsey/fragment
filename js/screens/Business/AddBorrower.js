import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { AppHeader, Loading, RadiusButton } from '../../components';

class BorrowerScreen extends Component {
  pressCreditClick = () => {
  };

  render() {
    const { navigation } = this.props;

    return (
      // 添加借款人页面（个人、企业）
      <ScrollView style={styles.container}>
        <AppHeader
          navigation={navigation}
          title="添加借款人"
        />
        <View style={styles.addBorrower}>
          <RadiusButton
            btnName=""
            textStyle={{
              fontSize: 16,
              color: '#00acff',
            }}
            btnStyle={{
              width: 150,
              height: 150,
              borderStyle: 'dashed',
              borderRadius: 75,
              borderColor: '#00acff',
            }}
            underlayColor="#fff"
            iconName="person"
            iconColor={{ color: '#00acff' }}
            textName="个人借款人"
            onPress={() => {
              Loading('show');
              navigation.navigate('AddPersonBorrower');
            }}
          />
        </View>
        <View>
          <RadiusButton
            btnName=""
            textStyle={{
              fontSize: 16,
              color: 'green',
            }}
            btnStyle={{
              width: 150,
              height: 150,
              borderStyle: 'dashed',
              borderRadius: 75,
              borderColor: 'green',
            }}
            underlayColor="#fff"
            iconName="business"
            iconColor={{ color: 'green' }}
            textName="企业借款人"
            onPress={() => {
              Loading('show');
              navigation.navigate('AddCompanyBorrower');
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

export default BorrowerScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
  borrower: {
    height: 60,
    textAlign: 'center',
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 20,
  },
  addBorrowerIcon: {
    width: 150,
    height: 150,
    borderRadius: 75,
    textAlign: 'center',
    borderColor: 'blue',
    backgroundColor: 'red',
  },
  addBorrower: {
    marginTop: 60,
    marginBottom: 10,
  },
});
