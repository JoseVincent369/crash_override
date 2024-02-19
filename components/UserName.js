// UserName.js

import React from 'react';
import { View, Text } from 'react-native';

const GreetUser = ({ jeal,jose,lloyd }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello, {username}!</Text>
    </View>
  );
};

export default GreetUser;
