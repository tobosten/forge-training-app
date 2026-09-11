import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import AddWorkoutStyles from '../styles/AddWorkoutStyles.js';
import useWorkoutStore from '../useWorkoutStore.js';
import { colors } from "../constants.js";
import DropdownComponent from './DropdownComponent.js';


export default function CreateCardioWorkoutComponent({
    showNotesInput, setShowNotesInput,
    workoutDates, setWorkoutDates,
    elementRef,
}) {
    const workoutList = useWorkoutStore((state) => state.workoutList);
    const setWorkoutList = useWorkoutStore((state) => state.setWorkoutList);
    const addExercise = useWorkoutStore((state) => state.addExercise);
    const setAddExercise = useWorkoutStore((state) => state.setAddExercise);
    const addedExercises = useWorkoutStore((state) => state.addedExercises);
    const setAddedExercises = useWorkoutStore((state) => state.setAddedExercises);
    const typesOfIntensity = ["Low", "Medium", "High"];


    const handleAddExercise = () => {
        const allFieldsFilled =
            addExercise.name?.length > 0 &&
            addExercise.distance?.length > 0 &&
            addExercise.duration?.length > 0 &&
            addExercise.intensity?.length > 0;

        if (!allFieldsFilled) {
            alert("Please fill in all fields before adding the exercise.");
            return;
        }

        const nameExists = addedExercises.some((exercise) => exercise.name === addExercise.name);
        if (nameExists) {
            alert("Exercise already added.");
            return;
        }
        console.log(addExercise);

        setAddedExercises([...addedExercises,
        {
            ...addExercise,
            id: workoutDates.startDate + "/" + addedExercises.length,
        }]);

        setAddExercise({});
    }

    /* 
    Distance
    Duration
    Intensity
    */

    return (
        <View style={{}}>
            <Text style={[AddWorkoutStyles.subTitleText,
            { color: addExercise.name?.length > 3 ? colors.orange : colors.white }]} ref={elementRef}>
                Exercise
            </Text>
            <TextInput
                maxLength={20}
                spellCheck={false}
                style={[AddWorkoutStyles.textWhite, AddWorkoutStyles.titleTextInput]}
                value={addExercise.name}
                onChangeText={(text) => setAddExercise({ ...addExercise, name: text.trim() })}
            />

            <View style={AddWorkoutStyles.exerciseFieldsWrapper}>
                <View style={AddWorkoutStyles.exerciseFieldContainer}>
                    <Text style={[AddWorkoutStyles.subTitleText, { color: addExercise.distance?.length > 0 ? colors.orange : colors.white }]}>
                        Distance<Text style={AddWorkoutStyles.distanceUnit}> /km</Text>
                    </Text>
                    <TextInput
                        maxLength={2}
                        keyboardType='numeric'
                        style={AddWorkoutStyles.excerciseFieldInput}
                        value={addExercise.distance}
                        onChangeText={(text) => setAddExercise({ ...addExercise, distance: text.trim() })}
                    />
                </View>

                <View style={AddWorkoutStyles.exerciseFieldContainer}>
                    <Text style={[AddWorkoutStyles.subTitleText, { color: addExercise.duration?.length > 0 ? colors.orange : colors.white }]}>
                        Target duration<Text style={AddWorkoutStyles.distanceUnit}> /min</Text>
                    </Text>
                    <TextInput
                        maxLength={3}
                        keyboardType='numeric'
                        style={AddWorkoutStyles.excerciseFieldInput}
                        value={addExercise.duration}
                        onChangeText={(text) => setAddExercise({ ...addExercise, duration: text.trim() })}
                    />
                </View>
            </View>
            <View style={AddWorkoutStyles.exerciseFieldContainer}>
                <Text style={[AddWorkoutStyles.subTitleText, { color: addExercise.intensity?.length > 0 ? colors.orange : colors.white }]}>Intensity</Text>
                <DropdownComponent
                    data={typesOfIntensity}
                    value={addExercise.intensity}
                    setValue={(intensity) => {
                        setAddExercise({ ...addExercise, intensity: intensity });
                        if (intensity === "strength" || intensity === "cardio") {
                            setTimeout(scrollToElement, 100);
                        }
                    }}
                    placeholder="Select an intensity"
                    width={"100%"}
                />
            </View>

            <TouchableOpacity style={[AddWorkoutStyles.dateButton, { marginTop: 30 }]} onPress={() => setShowNotesInput(!showNotesInput)}>{/* NEED FIX with new addExercise variable */}
                <Text style={[AddWorkoutStyles.dateButtonText]} numberOfLines={1}>
                    {addExercise.notes?.length > 0 ? addExercise.notes : "Add notes"}
                </Text>
            </TouchableOpacity>



            <TouchableOpacity style={[AddWorkoutStyles.createWorkoutButton, { marginTop: 40 }]} onPress={handleAddExercise}>
                <Text style={[AddWorkoutStyles.createWorkoutButtonText]}>
                    Add exercise
                </Text>
            </TouchableOpacity>

        </View >
    )
}