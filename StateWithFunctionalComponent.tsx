import React, {useState} from 'react';
import {Button, Switch, Text, TextInput, View} from 'react-native';

const StateWithFunctionalComponent = () => {
  // 1. useState로 초기값 0 세팅
  // 2. count는 원소. setCount 함수.
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(true);
  const [name, setName] = useState('');

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
      <Text>-------------------------------</Text>
      <Switch
        value={isOn}
        onValueChange={v => {
          console.log('isOn 1', isOn);
          console.log('v 1', v);
          setIsOn(v);
          console.log('isOn 2', isOn);
          console.log('v 2', v);
        }}
      />
      <Text>{isOn ? 'true' : 'false'}</Text>
      <Text>-------------------------------</Text>
      <TextInput
        value={name}
        onChangeText={v => {
          console.log('v', v);
          setName(v);
        }}
        style={{backgroundColor: 'blue'}}
      />
    </View>
  );
};

export default StateWithFunctionalComponent;
