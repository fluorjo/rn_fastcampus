import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

const UseEffectWithFunctionComponent = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(true);
  const [input, setInput] = useState('');
  const [isRefresh, setIsRefresh] = useState(false);

  useEffect(() => {
    console.log('didMount');
  }, []);
  useEffect(() => {
    console.log('didUpdate-count', count);
  }, [count]);
  useEffect(() => {
    if (isRefresh) {
      setTimeout(() => {
        setIsRefresh(false);
      }, 2000);
    }
  }, [isRefresh]);

  return (
    <View style={{alignItems: 'center'}}>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />

      <Text style={{marginVertical: 15}}>
        -------------------------------------------------
      </Text>
      <Switch value={isOn} onValueChange={setIsOn} />

      <Text style={{marginVertical: 15}}>
        -------------------------------------------------
      </Text>

      <Text>input: {input}</Text>
      <TextInput
        value={input}
        onChangeText={setInput}
        style={{borderBottomWidth: 1, borderColor: 'grey'}}
      />

      <Text style={{marginVertical: 15}}>
        -------------------------------------------------
      </Text>
      <Button title="새로고침!" onPress={() => setIsRefresh(true)} />
      {isRefresh && <ActivityIndicator />}
    </View>
  );
};

export default UseEffectWithFunctionComponent;
