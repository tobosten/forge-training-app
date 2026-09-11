import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { todaysWorkoutStyles as styles } from '../styles/todaysWorkoutStyles.js';
import WorkoutNotesComponent from './WorkoutNotesComponent.js';
import useWorkoutStore from '../useWorkoutStore.js';

export default function WorkoutDetailsComponent({
  exercise,
  number,
  type,
  setOpenWorkoutNotes,
  openWorkoutNotes,
  setSelectedInstruction }) {

  const handleOnPress = () => {
    setSelectedInstruction(exercise);
    setOpenWorkoutNotes(!openWorkoutNotes);
  }

  return (
    <TouchableOpacity style={[styles.excersiseContainer, number === 1 && { borderTopWidth: 0 }]} onPress={handleOnPress}>
      <Text style={styles.excersiseNumber}>{number}</Text>
      <View style={styles.instructionContainer}>
        <Text style={[styles.intructionName, styles.whiteColor]}>{exercise.name}</Text>
        <View style={styles.instructionAdditonalsContainer}>
          {type === "strength" && (
            <>
              <Text style={[styles.grayColor, styles.instructionAdditonalsText]}>{exercise.reps}</Text>
              <Text style={[styles.grayColor, styles.instructionAdditonalsText]}>x</Text>
              <Text style={[styles.grayColor, styles.instructionAdditonalsText]}>{exercise.sets}</Text>
            </>
          )}

          {type === "cardio" && (
            <>
              <Text style={[styles.grayColor]}>CARDIO</Text>
              <Text style={[styles.whiteColor]}>{exercise.reps}</Text>
              <Text style={[styles.whiteColor]}>{exercise.sets}</Text>
            </>
          )}
        </View>

      </View>

      <View style={styles.notesContainer}>
        <Text style={styles.notesPreviewText} numberOfLines={2}>{exercise.notes}</Text>
      </View>

    </TouchableOpacity>
  )
}