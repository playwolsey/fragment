import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { AppHeader } from '../../components/index';

class AddCompanyBorrowerScreen extends Component {
  pressCreditClick = () => {
    console.info(8888, 'ok');
  };

  render() {
    const { navigation } = this.props;
    console.log(navigation);

    return (
      // 添加借款人页面（个人、企业）
      <ScrollView style={styles.container}>
        <AppHeader
          navigation={navigation}
          title="添加借款人"
        />
        <View style={styles.addBorrower}>
          <Text>企业借款人</Text>
          <View style={{
            backgroundColor: '#FFF',
            borderWidth: 1,
          }}
          >
            <TextInput />
          </View>
          <TextInput />
          <Text>企业借款人</Text>
          <Text>企业借款人</Text>
          <Text>企业借款人</Text>
        </View>
      </ScrollView>
    );
  }
}

export default AddCompanyBorrowerScreen;

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
