import React from 'react';
import {StyleSheet, View} from 'react-native';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import Header from './Header';

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

console.log(statusBarHeight, bottomSpace);

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent:'flex-end',
    paddingTop: statusBarHeight,
    paddingBottom: bottomSpace,
  },
});