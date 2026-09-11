
import { View, Text, StyleSheet } from 'react-native'
import React, { Children } from 'react'
import { colors } from '../constants.js';

export default function StatisticTrackerComponent({ children, title }) {
  return (
    <View style={statisticTrackerStyles.container}>
      <Text style={statisticTrackerStyles.statTitle}>{title}</Text>
      {children}
    </View>
  )
}

const statisticTrackerStyles = StyleSheet.create({
  container: {
    display: 'flex',
    borderWidth: 1,
    borderColor: colors.darkAccent,
    minHeight: 170,
    marginTop: 20,
    padding: 20,
    borderRadius: 5,

    backgroundColor: colors.black,
    opacity: .8,
  },
  statTitle: {
    color: colors.lightgray,
    fontFamily: "SpaceGroteskRegular",
    letterSpacing: 1,
    marginBottom: 5,
  }
})
