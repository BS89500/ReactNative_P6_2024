import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

import colors from './app/config/colors';
import MyButton from './app/components/MyButton';
import IconButton from './app/components/IconButton';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableHighlight 
        style={styles.button}
        onPress={() => console.log("pressed")}
        underlayColor={colors.lightTeal}
        >
        <FontAwesome6 name="xbox" size={24} color="black" />
      </TouchableHighlight>

      <MyButton />
      <MyButton title="HI" />
      <MyButton 
        title="bye"
        onPress={() => console.log("bye")}
      />
      <MyButton 
        title="duh"
        onPress={() => console.log("duh")}
        underlayColor={colors.darkPurple}
        backgroundColor='pink'
        borderColor='hotpink'
        textColor='blue'
      />

    <FontAwesome6 name="xbox" size={40} color="green" />
    <IconButton />
    <IconButton name="playstation"/>
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
    height: 50,
    width: 50,
    borderRadius: 25, // when br is half side, it makes a circle
    backgroundColor: colors.lightLimeGreen,
    borderColor: colors.darkPurple,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darkPurple,
  },
});
