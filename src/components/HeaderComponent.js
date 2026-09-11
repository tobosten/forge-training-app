import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { HeaderStyles } from '../styles/HeaderStyles.js';

export default function HeaderComponent({ children }) {
  return (
    <View style={HeaderStyles.headerContainer}>
      <View style={HeaderStyles.headerChildrenContainer}>
        {children}
      </View>
      <LinearGradient
        colors={['#ff8800', "#1b1b1b", 'transparent']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: 2, width: '100%' }}
      />
    </View>
  )
}
