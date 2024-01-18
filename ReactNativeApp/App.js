import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  // have javascript here
  const {height, width} = Dimensions.get('window');
  console.log("height" + height + " width " + width);


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#aaa',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textContainer: {
      backgroundColor: 'lightgrey',
      width: width*0.85, // width = 85% of screen
    },
    text: {
      fontSize: 40,
      color: 'purple',
    },
  });
  

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        {/* comment */}
        <Text style={styles.text}>Good Morning</Text>
        <Text style= {{color: 'red', fontSize:20}}>healo</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
