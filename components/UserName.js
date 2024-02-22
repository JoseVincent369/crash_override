import React from 'react';
import {Text, View} from 'react-native';

const Cat = props => {
  return (
    <View>
      <Text>Hello, I am jeal {props.name}!</Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Cat name="jeal" />
      <Cat name="lloyd" />
      <Cat name="vincent" />
    </View>
  );
};

export default Cafe;
