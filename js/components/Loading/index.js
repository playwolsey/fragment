import React from 'react';
import { View, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import RootSiblings from 'react-native-root-siblings';

const { width, height } = Dimensions.get('window');

const renderSibling = () => {
  return (
    <View style={styles.maskStyle}>
      <View style={styles.backViewStyle}>
        <ActivityIndicator size="large" color="white" />
      </View>
    </View>
  );
};

// 加载Effect
const Effect = {
  sibling: null,

  show: () => {
    this.sibling = new RootSiblings(renderSibling());
  },

  hidden: () => {
    if (this.sibling instanceof RootSiblings) {
      this.sibling.destroy();
    }
  },
};

// 加载loading效果功能
const Loading = (type) => {
  if (type === 'show') {
    Effect.show();
    setTimeout(() => {
      Effect.hidden();
    }, 500);
  } else {
    Effect.hidden();
  }
};

const styles = StyleSheet.create({
  maskStyle: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backViewStyle: {
    backgroundColor: '#111',
    width: 120,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default Loading;
