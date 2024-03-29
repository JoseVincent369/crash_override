import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import UserName from './components/UserName';
export default function App() {
  return (
    <View style={styles.container}>
     <HelloWorld/>
     <Counter/>
     <UserName/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
