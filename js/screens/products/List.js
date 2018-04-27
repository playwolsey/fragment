import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  ScrollView,
  // StyleSheet,
} from 'react-native';
import {
  // Header,
  List,
  ListItem,
} from 'react-native-elements';
import { AppHeader } from '../../components';

@connect(state => ({
  list: state.products.productList,
}))
class ProductsScreen extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { dispatch, navigation } = this.props;
    const { seriesNo } = navigation.state.params;
    dispatch({
      type: 'products/fetch',
      payload: {
        seriesNo,
      },
    });
  }

  render() {
    const { list, navigation } = this.props;
    const { productName } = navigation.state.params;

    return (
      <View>
        <AppHeader
          navigation={navigation}
          title={productName}
        />
        <ScrollView>
          <List>
            {
              list.map(item => (
                <ListItem
                  key={item.id}
                  title={item.productName}
                  subtitle={item.info}
                  onPress={() => {
                    navigation.navigate('Detail', { productName: item.productName });
                  }}
                />
              ))
            }
          </List>
        </ScrollView>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   buttonGroup: {
//     height: 40,
//     backgroundColor: '#000',
//   },
// });

export default ProductsScreen;
