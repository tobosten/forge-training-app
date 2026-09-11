import { StyleSheet } from "react-native";
import { colors } from "../constants.js";

export const HeaderStyles = StyleSheet.create({

    /* App.js */
    headerContainer: {

    },
    headerChildrenContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        paddingHorizontal: "5%",
        height: 70,
        backgroundColor: colors.black
    },
    headerLogoContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: "auto"
    },
    headerTitle: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
    },
    headerLogo: {
        borderRadius: 3,
        height: 30,
        width: 30,
        marginRight: 10,
    },


    /* TodaysWorkout.js */
    backArrowContainer: {
        width: "100%",
        backgroundColor: colors.black,
        padding: 10,
    },
    backArrow: {
        color: colors.orange,
        width: 36,
        height: 36,
    },
})