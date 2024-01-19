import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <View style = {styles.darkGreyContainer}>
        <View style = {styles.redBox}>
          <Text>1</Text>
        </View>
        <View style = {styles.redBox}>
          <Text>2</Text>
        </View>
        <View style = {styles.redBox}>
          <Text>3</Text>
        </View>
      </View>
      <View style={styles.darkGreenContainer}>
        <View style={styles.greenRect}></View>
        <View style={styles.greenRect}></View>
        <View style={styles.greenRect}></View>
      </View>
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
  darkGreyContainer: {
    flex:1,
    backgroundColor: 'gray',
    width: '80%',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  redBox: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  darkGreenContainer: {
    backgroundColor: 'darkgreen',
    width: '80%',
    flex:5,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  greenRect: {
    backgroundColor: 'lightgreen',
    width: '80%',
    height: 50,
    margin: 10,
  },

});
