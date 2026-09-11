import { StyleSheet } from "react-native";
import { colors } from "../constants";


export const appStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
    marginBottom: 40,
    backgroundImage: "url(./assets/athlete.png)",

  },
  backgroundImage: {

  },

  titleQuote: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  titleQuote1: {
    fontWeight: 'regular',
    color: colors.orange,
    fontSize: 32,
    alignSelf: 'flex-start',
    fontSize: 14,
    fontFamily: "SpaceGroteskRegular",
  },
  titleQuote2: {
    color: colors.orange,
    fontFamily: "SpaceGroteskBold",
    fontSize: 32,
    alignSelf: 'flex-start',
  },




  /* STATISTIC TRACKERS */

  /* SESSIONS */
  statisticTrackersContainer: {
    width: "100%"
  },
  exercisesDoneTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
    width: '100%',
  },
  exercisesDoneText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: colors.white,
  },
  exercisesDoneTextSmall: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.gray,
  },
  sessionBar: {
    display: 'flex',
    flexDirection: 'row',
    height: 10,
    borderRadius: 20,
    width: '100%',
  },
  sessionBarCompleted: {
    display: 'flex',
    backgroundColor: "white",
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sessionBarCompletedContent: {
    height: 3,
    width: "100%",
    backgroundColor: colors.orange,
    borderRadius: 2,
  },
  sessionBarUncompleted: {
    display: 'flex',
    backgroundColor: '#313131',
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sessionBarUncompletedContent: {
    height: 2,
    width: "30%",
    backgroundColor: colors.gray,
    borderRadius: 2,
  },

  /* NEXT UP */
  nextUpTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 5,
    fontFamily: "SpaceGroteskBold",
  },
  nextUpTitle: {
    color: 'white',
    fontSize: 26,
  },
  nextUpDate: {
    color: colors.lightgray,
    fontSize: 14,
    fontFamily: "SpaceGroteskRegular"
  },

  openSessionButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  nextUpButton: {
    display: 'flex',
    flex: .5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 10,
    height: 45,
  },
  openSessionButtonText: {
    color: colors.orange,
    fontFamily: "SpaceGroteskRegular",
  },
  openSessionButtonTextChevron: {
    fontSize: 18,
    color: colors.orange,
    alignSelf: 'center',
    justifySelf: 'center',
    fontFamily: "SpaceGroteskRegular",
  },

  noUpcomingWorkoutsContainer: {
    position: "relative",
    overflow: "hidden",
    display: 'flex',
    width: "100%",
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: "20%",


    borderWidth: 1,
    borderColor: colors.darkAccent,
    borderRadius: 10,
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  noUpcomingWorkoutsText: {
    color: colors.white,
    fontFamily: "SpaceGroteskRegular",
    fontSize: 20,
    marginBottom: 20,
  },






});
