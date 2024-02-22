import React from 'react';
import { View, Text, Image, TextInput } from 'react-native'; // Added TextInput import for input field

const HelloWorld = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello, we are jeal team, this the picture of our CEO/Leader of this group!</Text>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFBkoR4PKbLSKa0nMSN_-6dJKq6kHPomG5nGaxShrtyWLnXWLx48qymM7-0H7pgsaIic&usqp=CAU' }}
        style={{ width: 200, height: 200, marginTop: 20 }}
        resizeMode="contain"
      />
      {/* TextInput equivalent */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <View style={{ marginRight: 10 }}>
          {/* Checkbox */}
          <TextInput
            style={{ height: 20, width: 20 }}
            type="checkbox"
          />
        </View>
        {/* Text input */}
        <TextInput
          style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Text input with checkbox"
        />
      </View>
    </View>
  );
};

export default HelloWorld;
