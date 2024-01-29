// 시작 전 App.js 코드
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import CustomHook from './CustomHook';

export default function App() {
  const [isTrue, setIsTrue] = useState(true);
  return (
    <View style={styles.container}>
      {/* <StateWithClassComponent /> */}
      {/* <StateWithFunctionalComponent /> */}
      {/* {isTrue ? <UseEffectWithClassComponent /> : null} */}
      {/* <UseEffectWithFunctionalComponent /> */}
      {/* <Button title="toggle" onPress={() => setIsTrue(!isTrue)} /> */}
      <CustomHook />
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
