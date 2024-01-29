import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';

import colors from '../config/colors';
function MyButton({title="0", onPress, underlayColor=colors.darkTeal,
        borderColor=colors.darkPurple, backgroundColor=colors.lightLimeGreen,
        textColor=colors.darkPurple}) {
    return(
        <TouchableHighlight 
            style={[styles.button, {backgroundColor: backgroundColor, borderColor: borderColor}]}
            onPress={onPress}
            underlayColor={underlayColor}
            >
            <Text style={[styles.text, {color: textColor}]}>{title}</Text>
        </TouchableHighlight> 
    );
}

const styles = StyleSheet.create({
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
})

export default MyButton;

