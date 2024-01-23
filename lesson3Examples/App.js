import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, TouchableHighlight, View, Alert } from 'react-native';

// put functions before app line c
const firstFunction = () => {
  alert('Yay, first function');
}
const myAlertFn = () => {
  Alert.alert("Alert Title", "Alert message", [
    {text: "yes", onPress: () => console.log("pressed yes")},
    {text: "no", onPress: () => console.log("pressed no")},
  ]);
}
export default function App() {
  return (
    <View style={styles.container}>
      <Button
      title="Button" 
      onPress={() => console.log('button clicked')}
      color="#842743"
      />

      <Button
      title="Call a function" 
      onPress={firstFunction}
      color='hotpink'
      />

      <TouchableHighlight
      onPress={firstFunction}
      style={styles.button}
      underlayColor='blue'>
          <Text>TH</Text>
      </TouchableHighlight>
      <Button
      title = "Alert Button"
      onPress = {myAlertFn}
      />
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
  button: {
    backgroundColor: 'lightblue',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
