import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from "../constants.js";

export default function BackButton({ path, onPress }) {
    return (
        <TouchableOpacity style={styles.backButtonContainer} onPress={() => {
            onPress();
            router.push({
                pathname: path
            });
        }}>
            <AntDesign name="arrow-left" size={16} color={colors.lightgray} />
            <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        backgroundColor: colors.black,
        borderWidth: 1,
        borderColor: colors.darkAccent,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    backButtonText: {
        color: colors.lightgray,
        fontSize: 14,
        fontFamily: "SpaceGroteskRegular",
    }

})