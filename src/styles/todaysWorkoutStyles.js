import { StyleSheet } from "react-native";
import { colors } from "../constants";


export const todaysWorkoutStyles = StyleSheet.create({

  whiteColor: {
    color: colors.white,
  },
  grayColor: {
    color: colors.lightgray,
  },
  container: {
    display: 'flex',
    padding: "5%",
    height: "100%",
  },
  titleDate: {
    paddingTop: "20%",
    color: colors.orange,
    fontSize: 14,
    fontFamily: "SpaceGroteskRegular",
  },
  titleText: {
    color: "white",
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  workoutDetailsContainer: {
    marginTop: "30%",
    borderWidth: 1,
    backgroundColor: colors.lightBlack,
    borderColor: colors.darkAccent,
    borderRadius: 10,
    overflow: 'hidden',
  },

  excersiseContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: colors.darkAccent,
    padding: 20,
    opacity: 1,
  },
  instructionContainer: {
    display: 'flex',
    flex: 1.4,
    borderRightWidth: 2,
    borderColor: colors.gray,
  },
  excersiseNumber: {
    color: colors.lightgray,
    marginRight: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  intructionName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  instructionAdditonalsContainer: {
    display: "flex",
    flexDirection: 'row',
  },
  instructionAdditonalsText: {
    fontFamily: "SpaceGroteskRegular",
    color: colors.lightgray,
    marginRight: 7,
    letterSpacing: 2,
  },

  notesContainer: {
    flex: 1,
    marginLeft: 20,
  },

  notesPreviewText: {
    color: colors.orange,
    fontSize: 12,
    textAlign: 'center',
    fontFamily: "SpaceGroteskRegular",
    letterSpacing: 1,
  },




  /* WORKOUT NOTES COMPONENT */

  notesModalOverlay: {
    display: 'flex',
    position: 'absolute',
    zIndex: 10,
    height: "100%",
    width: "100%",
    backgroundColor: colors.black,
    opacity: 0.8,
  },
  notesModalContainer: {
    position: 'absolute',
    marginTop: "70%",
    width: "90%",
    alignSelf: 'center',
    zIndex: 11,
    display: 'flex',
    fledDirection: 'column',
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 10,
    backgroundColor: colors.lightBlack,
    overflow: 'hidden',
    padding: 20,
    paddingBottom: 40,
  },

  notesHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notesTitle: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 26,
    letterSpacing: 1,
  },
  notesTrainingType: {
    color: colors.gray,
    fontFamily: "SpaceGroteskRegular",
    fontSize: 16,
    letterSpacing: 1,
  },
  notesCloseIcon: {
  },
  notesSetsRepsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
    paddingTop: 20,
    marginTop: 10,
    marginBottom: 30,
    borderTopWidth: 1,
    borderColor: colors.gray,
    width: "100%",
  },

  notesSubTitle: {
    color: colors.white,
    fontSize: 20,
    letterSpacing: 1,
    paddingBottom: 10,
    paddingTop: 20,
    borderTopWidth: 1,
    borderColor: colors.darkAccent,
  },

  notesText: {
    color: colors.orange,
    fontFamily: "SpaceGroteskRegular",
    letterSpacing: 1,
    fontSize: 16,
  },
  notesSetsRepsText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "SpaceGroteskRegular",
    letterSpacing: 1,
  }

});