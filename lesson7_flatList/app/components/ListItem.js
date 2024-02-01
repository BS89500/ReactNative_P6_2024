import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import colors from '../config/colors';

function ListItem({name, age, favActivity}) {
  return(
    <View style = {styles.itemRowContainer}>
    <Text style = {styles.rowText}>{name}, {age}, {favActivity}</Text>
    <Text style = {{color: colors.secondary}}>Crocheting</Text>
   </View>
  );
}


const styles = StyleSheet.create({
  rowText: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: 'bold',
  },

  text: {
    color: colors.primary,
    fontSize: 20,
  },
  itemRowContainer: {
    backgroundColor: colors.light,
    padding: 5
  }

});

export default ListItem; 
