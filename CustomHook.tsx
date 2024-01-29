import React, {useState} from 'react';
import {Button, GestureResponderEvent, TextInput, View} from 'react-native';

const InputBox = (props: {
  value: string | undefined;
  onChangeText: ((text: string) => void) | undefined;
  placeholder: string | undefined;
  onReset: ((event: GestureResponderEvent) => void) | undefined;
}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        style={{borderBottomWidth: 1, width: 200}}
        placeholder={props.placeholder}
      />
      <Button title="reset" onPress={props.onReset} />
    </View>
  );
};

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const resetValue = () => setValue(initialValue);
  return {
    value,
    setValue,
    resetValue,
  };
};

const CustomHook = () => {
  const {value: name, setValue: setName, resetValue: resetName} = useInput('');
  const {value: age, setValue: setAge, resetValue: resetAge} = useInput('');
  const {value: city, setValue: setCity, resetValue: resetCity} = useInput('');

  return (
    <View>
      <InputBox
        value={name}
        onChangeText={setName}
        placeholder="..."
        onReset={resetName}
      />
      <InputBox
        value={age}
        onChangeText={setAge}
        placeholder="..."
        onReset={resetAge}
      />
      <InputBox
        value={city}
        onChangeText={setCity}
        placeholder="..."
        onReset={resetCity}
      />
    </View>
  );
};

export default CustomHook;
