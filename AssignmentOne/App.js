import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from './app/config/colors'

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.blueContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>React Native Assgn 1</Text>
        </View>
      </View>
      <View style = {styles.lightBlueContainer}>
        <View style={styles.darkBlueContainer}></View>
        <View style={styles.darkBlueContainer}></View>
        <View style={styles.darkBlueContainer}></View>
        <View style={styles.tealContainer}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 27,
  },
  blueContainer: {
    backgroundColor: colors.primary,
    flex:1,
    width: '85%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    
  },
  textContainer: {
    backgroundColor: colors.secondary,
    width: '90%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  lightBlueContainer: {
    backgroundColor: colors.secondary,
    width: '85%',
    flex: 6,
    flexDirection: 'row',
    gap:10,
    justifyContent: 'center',
    marginBottom: 20,
  },
  darkBlueContainer: {
    backgroundColor: colors.darkGrey,
    width: '28%',
    height: '8%',
    marginTop: 10,
    borderRadius: 10,
  
  },
  tealContainer: {
    backgroundColor: colors.teal,
    borderWidth: 4,
    borderColor: colors.darkGrey,
    width: '28%',
    height: '40%',
    position: 'absolute',
    left: '65%',
    top: '55%',
  },
});
