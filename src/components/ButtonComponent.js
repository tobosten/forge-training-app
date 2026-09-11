import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from "../constants.js";

export default function ButtonComponent({ onPress, buttonText }) {

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.orange,
        padding: 15,
        borderRadius: 10,
        width: 150,
        marginTop: 40,
        marginBottom: 100,
        fontFamily: "SpaceGroteskBold",
    },
    buttonText: {
        fontFamily: "SpaceGroteskBold",
        color: "white",
        textAlign: 'center',
    },

})