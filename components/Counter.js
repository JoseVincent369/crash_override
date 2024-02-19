// Counter.js

import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  decrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Count: {count}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Increment" onPress={this.incrementCount} />
          <Button title="Decrement" onPress={this.decrementCount} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default Counter;
