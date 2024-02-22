import React from 'react';
import { View, Text, Image, TextInput } from 'react-native'; // Added TextInput import for input field

const HelloWorld = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFBkoR4PKbLSKa0nMSN_-6dJKq6kHPomG5nGaxShrtyWLnXWLx48qymM7-0H7pgsaIic&usqp=CAU' }}
        style={{ width: 200, height: 200, marginTop: 20 }}
        resizeMode="contain"
      />
      {/* TextInput equivalent */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <View style={{ marginRight: 10 }}>
          {/* Checkbox */}
          
          <Text>Hello</Text>
        </View>
        {/* Text input */}
       
      </View>
    </View>
  );
};

export default HelloWorld;
