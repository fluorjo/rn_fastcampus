// 시작 전 App.js 코드
import React from 'react';
import {StyleSheet, View} from 'react-native';
import StateWithClassComponent from './StateWithClassComponent';
export default function App() {
  return (
    <View style={styles.container}>
      <StateWithClassComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
