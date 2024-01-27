// 시작 전 App.js 코드
import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import UseEffectWithFunctionalComponent from './UseEffectWithFunctionalComponent';

export default function App() {
  const [isTrue, setIsTrue] = useState(true);
  return (
    <View style={styles.container}>
      {/* <StateWithClassComponent /> */}
      {/* <StateWithFunctionalComponent /> */}
      {/* {isTrue ? <UseEffectWithClassComponent /> : null} */}
      <UseEffectWithFunctionalComponent />
      <Button title="toggle" onPress={() => setIsTrue(!isTrue)} />
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
