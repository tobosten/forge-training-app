import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Touchable } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderStyles } from '../styles/HeaderStyles.js'
import { AddWorkoutStyles } from '../styles/AddWorkoutStyles.js';
import { StatusBar } from 'expo-status-bar';
import { colors, typesOfWorkout } from '../constants.js';
import CloseBlack32 from '../assets/close-black-32.png';

import HeaderComponent from '../components/HeaderComponent.js'
import BackButton from '../components/BackButton.js';
import DropdownComponent from '../components/DropdownComponent.js';
import useWorkoutStore from '../useWorkoutStore.js';
import CreateStrengthWorkoutComponent from '../components/CreateStrengthWorkoutComponent.js';
import CreateCardioWorkoutComponent from '../components/CreateCardioWorkoutComponent.js';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { router } from 'expo-router';


export default function AddWorkout() {
  const workoutList = useWorkoutStore((state) => state.workoutList);
  const setWorkoutList = useWorkoutStore((state) => state.setWorkoutList);
  const addExercise = useWorkoutStore((state) => state.addExercise);
  const setAddExercise = useWorkoutStore((state) => state.setAddExercise);
  const addedExercises = useWorkoutStore((state) => state.addedExercises);
  const setAddedExercises = useWorkoutStore((state) => state.setAddedExercises);

  const [workoutTitle, setWorkoutTitle] = useState("");
  const [showNotesInput, setShowNotesInput] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [workoutDates, setWorkoutDates] = useState({
    every: "",
    startDate: "",
    duration: "",
    array: []
  });
  const scrollViewRef = useRef(null);
  const elementRef = useRef(0);
  const fashionArray = ["100", "90", "80", "70", "80", "90", "100"];
  const currentDate = new Date();

  useEffect(() => {
    setAddExercise({});
  }, [setAddExercise]);

  const handleDisplayDate = (date) => {
    /* Sets date to "Mon Aug 30" */
    const dateValues = date.toDateString().split(" "); /* [Mon, Jun, 29, 2026] */
    return (dateValues[0] + " | " + dateValues[1] + " " + dateValues[2])
  }

  const scrollToElement = () => {
    /* Used to scroll to exercise name */
    if (!scrollViewRef.current) return;
    scrollViewRef.current.scrollTo({
      x: 0,
      y: Math.max(elementRef.current - 20, 0),
      animated: true
    });
  }

  const handleCreateWorkout = () => {
    const allFieldsFilled =
      addedExercises.length > 0 &&
      workoutDates.startDate.length > 0 &&
      workoutTitle.length > 0;

    if (!allFieldsFilled) {
      alert("Please fill in all fields before creating the workout.");
      return;
    }

    const everyDays = Number(workoutDates.every);
    const durationDays = Number(workoutDates.duration) * 7;

    /* Sets first date in array */
    let firstDate = new Date(workoutDates.startDate);
    firstDate.setHours(23, 59, 59, 999);
    workoutDates.array.push({ nextDate: firstDate.toISOString(), completed: false });

    for (let i = everyDays; i <= durationDays; i += everyDays) {
      /* Pushes each date to workoutDatesArray */
      let nextDate = new Date(workoutDates.startDate);
      nextDate.setDate(nextDate.getDate() + i);
      nextDate.setHours(23, 59, 59, 999)
      workoutDates.array.push({ nextDate: nextDate.toISOString(), completed: false });
    }

    console.log("Workout created:", {
      title: workoutTitle,
      exercises: addedExercises
    });


    /* Sets to local storage / store */
    setWorkoutList({
      title: workoutTitle,
      dates: workoutDates.array,
      exercises: addedExercises
    });

    nullifyStateValues();
    router.push("/App");
  }

  const nullifyStateValues = () => {
    setAddExercise({});
    setWorkoutDates({
      every: "",
      startDate: "",
      duration: "",
      array: []
    });
    setAddedExercises([]);
    /* setStrengthWorkout({}); */
  }

  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: "#000" }]} >

      <HeaderComponent>
        <View style={HeaderStyles.headerLogoContainer}>
          <Image
            source={require("../assets/forge-logo.png")}
            style={HeaderStyles.headerLogo}
          />
          <Text style={HeaderStyles.headerTitle}>Forge</Text>
        </View>
        <BackButton path="App" onPress={nullifyStateValues} />
      </HeaderComponent>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView ref={scrollViewRef}>

          <StatusBar style="light" />



          {/* Content */}
          <View style={AddWorkoutStyles.contentContainer}>
            <Text style={[AddWorkoutStyles.textOrange]}>NEW SESSION</Text>
            <Text style={[AddWorkoutStyles.textWhite, AddWorkoutStyles.mainTitle]}>ADD A WORKOUT.</Text>
            <Text style={[AddWorkoutStyles.textGray]}>Create your own workout plan to see it on your home screen in the app.</Text>

            <Text style={[AddWorkoutStyles.subTitleText,
            { color: workoutTitle?.length > 0 ? colors.orange : colors.white }]}>Workout name</Text>
            <TextInput maxLength={20} spellCheck={false} style={[AddWorkoutStyles.textWhite, AddWorkoutStyles.titleTextInput]}
              value={workoutTitle}
              onChangeText={(text) => setWorkoutTitle(text)}
              onEndEditing={() => setWorkoutTitle(workoutTitle?.trim())}
            />

            {/* Border lines */}
            {fashionArray.map((value, index) => (
              <View key={index}
                style={[AddWorkoutStyles.exerciseDatesBorder, {
                  width: `${value}%`
                },
                index === 1 || index === 3 || index === 4 ? { backgroundColor: colors.gray } : {},
                index === 2 && { backgroundColor: colors.orange }]} />
            ))}

            <View style={AddWorkoutStyles.exerciseDates}>
              <Text style={[AddWorkoutStyles.textWhite, AddWorkoutStyles.exerciseDatesText]}>Every</Text>
              <TextInput
                maxLength={1}
                keyboardType='numeric'
                indicatorStyle="white"
                style={[
                  AddWorkoutStyles.excerciseDatesNumberInput,
                  workoutDates.every.length > 0 ? { color: colors.orange, borderWidth: 0, width: 30, fontWeight: "600", fontSize: 20 } : { color: colors.white, width: 60 }
                ]}
                value={workoutDates.every}
                onChangeText={(text) => setWorkoutDates({ ...workoutDates, every: text })}
                selection={{ start: workoutDates.every.length, end: workoutDates.every.length }}
              />

              <Text style={[AddWorkoutStyles.textWhite, AddWorkoutStyles.exerciseDatesText]}>days, from</Text>

              <TouchableOpacity
                style={[
                  AddWorkoutStyles.exerciseDatesDateInputBtn,
                  workoutDates.startDate ? { borderWidth: 0 } : { borderWidth: 1, borderColor: colors.darkAccent, paddingHorizontal: 30 }]}
                onPress={() => setShowDatePicker(true)}
              >
                <Text style={[
                  AddWorkoutStyles.textWhite,
                  workoutDates.startDate ? { color: colors.orange, fontWeight: "600", fontSize: 20 } : { color: colors.white }]}
                >
                  {workoutDates.startDate ? (handleDisplayDate(new Date(workoutDates.startDate))) : ("Date")}</Text>
              </TouchableOpacity>
            </View>

            <View style={AddWorkoutStyles.exerciseDatesDurationContainer}>
              <Text style={[AddWorkoutStyles.textWhite, AddWorkoutStyles.exerciseDatesText]}>Duration is</Text>
              <TextInput
                maxLength={2}
                keyboardType='numeric'
                indicatorStyle="white"
                style={[
                  AddWorkoutStyles.excerciseDatesNumberInput,
                  workoutDates.duration.length > 0 ? { color: colors.orange, borderWidth: 0, width: 30, fontWeight: "600", fontSize: 20 } : { color: colors.white, width: 60 }
                ]}
                value={workoutDates.duration}
                onChangeText={(text) => setWorkoutDates({ ...workoutDates, duration: text })}
                selection={{ start: workoutDates.duration.length, end: workoutDates.duration.length }}
              />
              <Text style={[AddWorkoutStyles.textWhite, AddWorkoutStyles.exerciseDatesText]}>weeks.</Text>
            </View>

            {showDatePicker && (
              <RNDateTimePicker
                mode="date"
                timeZoneName={'Europe/Prague'}
                display="spinner"
                minimumDate={currentDate}
                value={workoutDates.startDate ? new Date(workoutDates.startDate) : new Date()}
                onValueChange={(event, date) => {
                  if (!date) return;
                  setWorkoutDates({ ...workoutDates, startDate: date.toISOString() });
                  setShowDatePicker(false)
                }}
                onDismiss={() => setShowDatePicker(false)}
                onNeutralButtonPress={() => { setShowDatePicker(false) }}
              />
            )}

            {/* Border lines */}
            {fashionArray.map((value, index) => (
              <View key={index}
                style={[AddWorkoutStyles.exerciseDatesBorder, {
                  width: `${value}%`
                },
                index === 2 || index === 3 || index === 5 ? { backgroundColor: colors.gray } : {},
                index === 4 && { backgroundColor: colors.orange }]} />
            ))}


            <View style={AddWorkoutStyles.addedExercises}>
              {addedExercises.length > 0 &&
                addedExercises.map((exercise, index) => (
                  <View style={AddWorkoutStyles.addedExerciseContainer} key={index}>
                    <TouchableOpacity style={AddWorkoutStyles.addedExercise} onPress={() => {
                      /* Select selected exercise, fills in all fields for that exercise to edit */
                    }}>
                      <Text style={AddWorkoutStyles.addedExerciseText}>{exercise.name}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={AddWorkoutStyles.removeAddedExerciseBtn} onPress={() => {
                      /* Removes the selected exercise */
                      const updatedExercises = [...addedExercises];
                      updatedExercises.splice(index, 1);
                      setAddedExercises(updatedExercises);
                    }}>
                      <Image source={CloseBlack32} style={{ height: 25, width: 25 }} />
                    </TouchableOpacity>
                  </View>
                ))
              }
            </View>


            <View style={AddWorkoutStyles.fieldsWrapper}>
              <Text style={[AddWorkoutStyles.subTitleText, { color: addExercise.type?.length > 0 ? colors.orange : colors.white }]}>Type of workout</Text>
              <DropdownComponent
                /* title="Type of workout" */
                data={typesOfWorkout}
                value={addExercise.type}
                setValue={(type) => {
                  setAddExercise({ ...addExercise, type: type });
                  if (type === "strength" || type === "cardio") {
                    setTimeout(scrollToElement, 100);
                  }
                }}
                placeholder="Select a workout type"
                width={"100%"}
              />
            </View>

            {addExercise.type === "strength" && (
              <View onLayout={(event) => {
                elementRef.current = event.nativeEvent.layout.y;
              }}>
                <CreateStrengthWorkoutComponent
                  workoutDates={workoutDates}
                  setWorkoutDates={setWorkoutDates}
                  showNotesInput={showNotesInput}
                  setShowNotesInput={setShowNotesInput}
                />
              </View>
            )}

            {addExercise.type === "cardio" && (
              <View onLayout={(event) => {
                elementRef.current = event.nativeEvent.layout.y;
              }}>
                <CreateCardioWorkoutComponent
                  workoutDates={workoutDates}
                  setWorkoutDates={setWorkoutDates}
                  showNotesInput={showNotesInput}
                  setShowNotesInput={setShowNotesInput}
                />
              </View>
            )}

            <TouchableOpacity style={[AddWorkoutStyles.createWorkoutButton, { marginTop: 40 }]} onPress={handleCreateWorkout}>
              <Text style={[AddWorkoutStyles.createWorkoutButtonText]}>
                Create workout
              </Text>
            </TouchableOpacity>
          </View>

          {showNotesInput && (
            <View style={AddWorkoutStyles.notesContainer}>
              <View style={AddWorkoutStyles.notesBackground} />
              <TextInput style={AddWorkoutStyles.notesInput} multiline={true}
                placeholder='Add notes here...'
                placeholderTextColor={colors.lightgray}
                value={addExercise.notes}
                onChangeText={(text) => setAddExercise({ ...addExercise, notes: text.trim() })}
                onEndEditing={() => {
                  setShowNotesInput(false);
                  setAddExercise({ ...addExercise, notes: addExercise.notes.trim() });
                }}
              />
              <TouchableOpacity onPress={() => setShowNotesInput(false)} style={AddWorkoutStyles.notesCloseBtn}>
                <Text style={AddWorkoutStyles.notesCloseBtnText}>▼ ▼ ▼</Text>
              </TouchableOpacity>

            </View>
          )}

          {showNotesInput &&
            <View style={AddWorkoutStyles.notesWrapper}>
              <View style={AddWorkoutStyles.notesOpacityBackground} />
              <View style={AddWorkoutStyles.notesInputContainer}>
                <TextInput style={AddWorkoutStyles.notesInput} multiline={true}
                  placeholder='Add notes here...'
                  placeholderTextColor={colors.lightgray}
                  value={addExercise.notes}
                  onChangeText={(text) => setAddExercise({ ...addExercise, notes: text })}
                />
              </View>

              <TouchableOpacity onPress={() => setShowNotesInput(false)} style={AddWorkoutStyles.notesCloseBtn}>
                <Text style={AddWorkoutStyles.notesCloseBtnText}>▼ ▼ ▼</Text>
              </TouchableOpacity>
            </View>
          }


        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView >
  )
}

