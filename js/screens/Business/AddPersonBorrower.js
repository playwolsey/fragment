import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { AppHeader } from '../../components/index';

class AddPersonBorrowerScreen extends Component {
  pressCreditClick = () => {
    console.info(8888, 'ok');
  };

  render() {
    const { navigation } = this.props;
    console.log(navigation);

    return (
      <ScrollView style={styles.container}>
        <AppHeader
          navigation={navigation}
          title="添加借款人"
        />
        <View style={styles.addBorrower}>
          <Text>个人借款人</Text>
          <Text>个人借款人</Text>
          <Text>个人借款人</Text>
          <Text>个人借款人</Text>
        </View>
      </ScrollView>
    );
  }
}

export default AddPersonBorrowerScreen;

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
