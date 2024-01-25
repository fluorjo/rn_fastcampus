import React from 'react';
import {Button, Text, View} from 'react-native';

interface State {
  count: number;
}

class Component extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
        // 1. counter 초기값 설정
      count: 0,
    };
  }

  render() {
    return (
      <View>
        {/* 2. this로 count state에 접근 */}
        <Text>You clicked {this.state.count} times</Text>
        <Button
          title="Click me"
        //   3. setState로 값 변동
          onPress={() => this.setState({count: this.state.count + 1})}
        />
      </View>
    );
  }
}

export default Component;
