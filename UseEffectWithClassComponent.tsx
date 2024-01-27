import React from 'react';
import {Button, Text, View} from 'react-native';
interface State {
  count: number;
  what: number;
}
class UseEffectWithClassComponent extends React.Component<{}, State> {
  constructor(props: {}) {
    console.log('constructor');
    super(props);
    this.state = {
      count: 0,
      what: 0,
    };
  }

  componentDidMount() {
    console.log('didMount');
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
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

export default UseEffectWithClassComponent;
