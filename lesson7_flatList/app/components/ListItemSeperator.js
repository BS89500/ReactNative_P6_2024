import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

export default function ListItemSeperator({color=colors.dark}) {
  return (
    <View style={[styles.seperator, {backgroundColor: color}]}/>
  )
}

const styles = StyleSheet.create({
    seperator: {
        width: '100%',
        height: 3,
    }

})