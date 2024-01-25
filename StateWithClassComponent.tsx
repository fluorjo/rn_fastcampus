import React from 'react';
import {Button, Text, View} from 'react-native';

interface State {
  count: number;
}

class Component extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <View>
        <Text>You clicked {this.state.count} times</Text>
        <Button
          title="Click me"
          onPress={() => this.setState({count: this.state.count + 1})}
        />
      </View>
    );
  }
}

export default Component;
