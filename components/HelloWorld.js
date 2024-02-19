// HelloWorld.js

import React from 'react';
import { View, Text, Image } from 'react-native';

const HelloWorld = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello, World!</Text>
      <Image
        source={{ uri: 'https://example.com/helloworld.png' }}
        style={{ width: 200, height: 200, marginTop: 20 }}
        resizeMode="contain"
      />
    </View>
  );
};

export default HelloWorld;
