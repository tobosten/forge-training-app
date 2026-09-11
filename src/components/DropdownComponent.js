import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { AddWorkoutStyles as styles } from '../styles/AddWorkoutStyles.js';
import { useEffect, useState } from 'react';
import { colors } from '../constants.js';

export default function DropdownComponent({ title, data, value, setValue, placeholder, width }) {

    const [display, setDisplay] = useState(false);
    const [placeholderText, setPlaceholderText] = useState(placeholder);

    useEffect(() => {
        if (!value) {
            setPlaceholderText(placeholder);
            return;
        }
        setPlaceholderText(value.toUpperCase().slice(0, 1) + value.slice(1));
    }, [value, placeholder]);


    return (
        <View style={[styles.dropdownWrapper, { width: width }]}>

            {title && <Text style={styles.textWhite}>{title}</Text>}

            <TouchableOpacity style={[
                styles.dropdownButton,
                placeholderText === placeholder ? "" : { borderLeftColor: colors.orange }]} onPress={() => setDisplay(!display)}>
                <Text style={[styles.textGray, placeholderText === placeholder ? "" : { color: colors.orange }]}>{placeholderText}</Text>
                <Text style={styles.textWhite}>{display ? "▲" : "▼"}</Text>
            </TouchableOpacity>
            {display && (
                <View style={[styles.dropdownList]}>
                    {data.map((item, index) => {
                        return (
                            <TouchableOpacity style={{ height: 50 }} key={index} onPress={() => {
                                setValue(item);
                                setPlaceholderText(item.toUpperCase().slice(0, 1) + item.slice(1));
                                setDisplay(false);
                            }}>
                                <Text style={[styles.textWhite, styles.dataText]}>{item.toUpperCase().slice(0, 1) + item.slice(1)}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            )}


        </View>
    )
}

