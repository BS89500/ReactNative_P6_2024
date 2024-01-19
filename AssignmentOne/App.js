import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from './app/config/colors'

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.blueContainer}>
        <View style={styles.textContainer}>
          <Text>React Native Assgn 1</Text>
        </View>
      </View>
      <View style = {styles.lightBlueContainer}>
        <View style={styles.darkBlueContainer}></View>
        <View style={styles.darkBlueContainer}></View>
        <View style={styles.darkBlueContainer}></View>
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
    margin:20,
  },
  text: {
    fontWeight: 'bold'
  },
  blueContainer: {
    backgroundColor: colors.primary,
    width: '90%',
    height: '15%',
    alignItems: 'center',
    marginBottom: 10,
    
  },
  textContainer: {
    backgroundColor: colors.secondary,
    width: '80%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  lightBlueContainer: {
    backgroundColor: colors.secondary,
    width: '90%',
    height: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  darkBlueContainer: {
    backgroundColor: colors.primary,
    width: '28%',
    height: '9%',
    marginTop: 10,
    borderRadius: 10,
  }
});
