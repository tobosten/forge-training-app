import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { todaysWorkoutStyles as styles } from '../styles/todaysWorkoutStyles.js';
import useWorkoutStore from '../useWorkoutStore.js';

const WorkoutNotesComponent = ({ selectedInstruction, setOpenWorkoutNotes, type }) => {

  console.log("Selected instruction:", selectedInstruction);

  /* 
      Distance
      Duration
      Intensity
  */
  return (
    <View style={styles.notesModalContainer}>
      <View style={styles.notesHeaderContainer}>
        <Text style={styles.notesTitle} numberOfLines={1}>{selectedInstruction.name} </Text>
        <TouchableOpacity style={styles.notesCloseIcon} onPress={() => setOpenWorkoutNotes(false)}>
          <Image source={require("../assets/close-orange-36.png")} />
        </TouchableOpacity>
      </View>
      <Text style={styles.notesTrainingType}>{selectedInstruction.type.charAt(0).toUpperCase() + selectedInstruction.type.slice(1)}</Text>

      <View style={styles.notesSetsRepsContainer}>
        {selectedInstruction.type === "strength" && (
          <>
            <Text style={styles.notesSetsRepsText}>Reps: {selectedInstruction.reps}</Text>
            <Text style={styles.notesSetsRepsText}>Sets: {selectedInstruction.sets}</Text>
          </>
        )}
        {selectedInstruction.type === "cardio" && (
          <>
            <Text style={styles.notesSetsRepsText}>Duration: {selectedInstruction.duration} min</Text>
            <Text style={styles.notesSetsRepsText}>Distance: {selectedInstruction.distance} km</Text>
            <Text style={styles.notesSetsRepsText}>Intensity: {selectedInstruction.intensity}</Text>
          </>
        )}
      </View>
      <Text style={styles.notesSubTitle}>Notes</Text>
      <Text style={styles.notesText}>{selectedInstruction.notes}</Text>


    </View >
  )
}

export default WorkoutNotesComponent