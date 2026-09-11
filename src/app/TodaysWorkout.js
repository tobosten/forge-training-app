import { View, Text, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router, useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

import { todaysWorkoutStyles as styles } from '../styles/todaysWorkoutStyles.js';
import { HeaderStyles } from '../styles/HeaderStyles.js';

import WorkoutDetailsComponent from '../components/WorkoutDetailsComponent.js';
import WorkoutNotesComponent from '../components/WorkoutNotesComponent.js';
import HeaderComponent from '../components/HeaderComponent.js';
import useWorkoutStore from '../useWorkoutStore.js';
import ButtonComponent from '../components/ButtonComponent.js';
import BackButton from '../components/BackButton.js';


export default function TodaysWorkout() {
  const [openWorkoutNotes, setOpenWorkoutNotes] = useState(false);
  const nextUpWorkout = useWorkoutStore(state => state.nextUpWorkout); /* Date */
  const workoutList = useWorkoutStore(state => state.workoutList); /* Workout object */
  const setWorkoutList = useWorkoutStore(state => state.setWorkoutList);
  const [selectedInstruction, setSelectedInstruction] = useState(null);

  const handleWorkoutTypeBackground = () => {
    /*  switch (workoutList) {
       case "strength":
         return require("../assets/strengthBackground.jpg");
       case "cardio":
         return require("../assets/cardioBackground.png");
       default:
         return require("../assets/strengthBackground.jpg");
     } */

    return require("../assets/strengthBackground.jpg")
  }

  console.log("Workout:", workoutList);
  const fixedDate = new Date(nextUpWorkout?.date).toDateString() || "N/A";
  fixedDate.split(" ").slice(0, 3).join(" | ");

  const handleDoneButtonPress = () => {
    for (let i = 0; i < workoutList.dates.length; i++) {
      if (workoutList.dates[i].completed === false) {
        workoutList.dates[i].completed = true;
        break;
      }
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000', position: 'relative' }}>

      {/* Modal for workout instructions */}
      {openWorkoutNotes && (
        <>
          <View style={styles.notesModalOverlay} />
          <WorkoutNotesComponent
            selectedInstruction={selectedInstruction}
            type={nextUpWorkout.type}
            openWorkoutNotes={openWorkoutNotes}
            setOpenWorkoutNotes={setOpenWorkoutNotes}
          />
        </>
      )}

      <ImageBackground
        source={handleWorkoutTypeBackground()}
        imageStyle={{ opacity: .10, position: "absolute", height: "60%" }} style={{ flex: 1, position: 'relative' }}
      >

        <HeaderComponent>
          <View style={HeaderStyles.headerLogoContainer}>
            <Image
              source={require("../assets/forge-logo.png")}
              style={HeaderStyles.headerLogo}
            />
            <Text style={HeaderStyles.headerTitle}>Forge</Text>
          </View>
          <BackButton path="App" onPress={() => { }} />
        </HeaderComponent>

        <ScrollView style={styles.container}>

          <Text style={styles.titleDate}>{new Date(nextUpWorkout).toDateString().split(" ").slice(0, 3).join("  |  ")}</Text>
          <Text style={styles.titleText}>{workoutList.title}</Text>

          <View style={styles.workoutDetailsContainer}>


            {workoutList.exercises.map((item, index) => {
              return (
                <WorkoutDetailsComponent
                  key={item.id}
                  exercise={item}
                  type={item.type}
                  number={index + 1}
                  setSelectedInstruction={setSelectedInstruction}
                  openWorkoutNotes={openWorkoutNotes}
                  setOpenWorkoutNotes={setOpenWorkoutNotes}
                />
              );
            })}

          </View>

          <ButtonComponent onPress={() => {
            handleDoneButtonPress()
            router.push({
              pathname: "App"
            });
          }} buttonText="Done" path="App" />

        </ScrollView>
      </ImageBackground>
    </SafeAreaView >
  )
}