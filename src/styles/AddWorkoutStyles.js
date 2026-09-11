import { StyleSheet } from "react-native";
import { colors } from "../constants.js";

export const AddWorkoutStyles = StyleSheet.create({

    textGray: {
        color: colors.gray,
    },
    textWhite: {
        color: colors.white,
    },
    textOrange: {
        color: colors.orange,
        fontFamily: "SpaceGroteskRegular",
        letterSpacing: 2,
    },

    contentContainer: {
        paddingHorizontal: "5%",
        marginTop: 40,
        marginBottom: 40,
    },

    mainTitle: {
        fontSize: 30,
        fontWeight: "bold",
    },

    /* Dates */

    exerciseDatesBorder: {
        height: 1,
        backgroundColor: colors.darkAccent,
        marginTop: 7,
        alignSelf: "center",
    },
    exerciseDates: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 45,
        borderWidth: 1,
        marginTop: 25,
        /* borderColor: "red", */
    },
    exerciseDatesText: {

    },
    excerciseDatesNumberInput: {
        display: "flex",
        textAlign: "center",
        borderWidth: 1,
        borderColor: colors.darkAccent,
        borderRadius: 10,
        width: 25,
        maxHeight: 50,
        marginLeft: 10,
        marginRight: 5,
    },
    exerciseDatesDateInputBtn: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.black,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: colors.darkAccent,
        borderRadius: 10,
        height: "100%",
        maxHeight: 50,
    },
    exerciseDatesDurationContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 45,
        marginTop: 10,
        marginBottom: 20,
    },

    dateButton: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: colors.black,
        height: 50,
        borderRadius: 10,
        marginTop: 10,
        borderColor: colors.darkAccent,
        borderWidth: 1,
    },
    dateButtonText: {
        color: colors.orange,
        fontFamily: "SpaceGroteskRegular",
    },
    dateButtonTextSelected: {
        color: colors.orange,
        fontFamily: "SpaceGroteskRegular",
        letterSpacing: 1,
    },



    /* Dropdown Component */
    fieldsWrapper: {
        marginTop: 40
    },
    dropdownWrapper: {
        position: "relative",

    },
    dropdownButton: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: colors.black,
        width: "100%",
        height: 50,
        borderRadius: 10,
        marginTop: 10,
        borderColor: colors.darkAccent,
        borderWidth: 1,
    },

    dropdownList: {
        width: "100%",
        position: "absolute",
        zIndex: 10,
        borderRadius: 10,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.darkAccent,
        borderBottomColor: colors.orange,

        top: 85,
        backgroundColor: colors.black,
    },
    dataText: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },


    /* Added exercises */
    addedExercises: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
        gap: 15,
    },
    addedExerciseContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    addedExercise: {
        display: "flex",
        alignItems: "center",
        backgroundColor: colors.orange,
        marginRight: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        paddingHorizontal: 10,
        height: 25,
    },
    addedExerciseText: {
        color: colors.white
    },
    removeAddedExerciseBtn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.orange,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        paddingHorizontal: 5,
        overflow: "hidden",
    },




    /* Strength Fields ------------------- */
    subTitleText: {
        marginTop: 20,
        color: colors.white,
    },
    titleTextInput: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: colors.black,
        width: "100%",
        height: 50,
        borderRadius: 10,
        marginTop: 10,
        borderColor: colors.darkAccent,
        borderWidth: 1,
        marginBottom: 20,
    },




    createWorkoutButton: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: colors.orange,
        height: 50,
        borderRadius: 10,
        marginTop: 10,
        borderColor: colors.darkAccent,
        borderWidth: 1,
    },
    createWorkoutButtonText: {
        letterSpacing: 1,
        color: colors.black,
        fontFamily: "SpaceGroteskBold",
    },

    exerciseFieldsWrapper: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
    },
    exerciseFieldContainer: {
        marginRight: 30,
    },
    excerciseFieldInput: {
        borderWidth: 1,
        borderColor: colors.darkAccent,
        borderRadius: 10,
        height: 50,
        marginTop: 10,
        width: 150,
        color: colors.white,
        paddingHorizontal: 20,
    },
    distanceUnit: {
        color: colors.gray,
        fontSize: 12,
    },



    /* Notes */
    notesWrapper: {
        position: "absolute",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    notesOpacityBackground: {
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: "black",
        opacity: 0.6,
    },
    notesInputContainer: {
        backgroundColor: colors.darkAccent,
        width: "80%",
        height: 200,
        padding: 15,
        borderRadius: 10,
    },
    notesInput: {
        height: "100%",
        textAlignVertical: "top",
        color: colors.orange,
        letterSpacing: 1,
        fontFamily: "SpaceGroteskRegular",
        textAlign: "left",
    },
    notesCloseBtn: {
        marginLeft: "auto",
        marginRight: "10%",
        marginBottom: "200",
    },
    notesCloseBtnText: {
        color: colors.orange,
        fontSize: 20,
        padding: 10,
    },

})

export default AddWorkoutStyles;