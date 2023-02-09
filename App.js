import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>

      <TextInput style={{backgroundColor:'white', width: 200, height:25, borderRadius: 5}}></TextInput>
      <Button title = 'Tap Me!'/>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2929',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
