import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useState, useEffect } from "react";
import { router } from "expo-router";
import useWorkoutStore from "../useWorkoutStore.js";

import { appStyles } from "../styles/AppStyles.js";
import { HeaderStyles } from "../styles/HeaderStyles.js";

import StatisticTrackerComponent from "../components/StatisticTrackerComponent.js";
import HeaderComponent from "../components/HeaderComponent.js";
import ButtonComponent from "../components/ButtonComponent.js";

export default function App() {
  const workoutList = useWorkoutStore((state) => state.workoutList);
  const nextUpWorkout = useWorkoutStore((state) => state.nextUpWorkout);
  const setNextUpWorkout = useWorkoutStore((state) => state.setNextUpWorkout);
  const workoutHistory = useWorkoutStore((state) => state.workoutHistory);
  const setWorkoutHistory = useWorkoutStore((state) => state.setWorkoutHistory);
  const [isWorkoutActive, setIsWorkoutActive] = useState(false);

  /* AsyncStorage.clear(); */

  const checkNextWorkout = () => {
    let uncompletedWorkoutList = workoutList?.dates?.filter(item => !item.completed) || [];
    let now = new Date().getTime();
    let nextUpDate = null;

    /* Find the next upcoming workout date */
    for (let i = 0; i < uncompletedWorkoutList.length; i++) {
      const date = new Date(uncompletedWorkoutList[i].nextDate).getTime();
      if (date > now && (nextUpDate === null || date < new Date(nextUpDate).getTime())) {
        nextUpDate = new Date(date).toISOString();
      }
    }

    /* Set next up workout only when changed to avoid update loops */
    if (nextUpDate !== nextUpWorkout) {
      setNextUpWorkout(nextUpDate);
    }

  }



  const [fontsLoaded] = useFonts({
    SpaceGroteskRegular: require("../assets/fonts/SpaceGrotesk-Regular.ttf"),
    SpaceGroteskBold: require("../assets/fonts/SpaceGrotesk-Bold.ttf"),
  });

  const checkWorkoutActive = () => {
    /* Check if the current workout is completed */
    let completed = workoutList?.dates?.filter(item => item.completed) || [];
    let dates = workoutList?.dates || [];
    const isComplete = completed.length === dates.length && dates.length > 0;
    const isActive = Boolean(workoutList?.title) && dates.length > 0 && completed.length !== dates.length;

    if (isComplete) {
      const alreadyInHistory = workoutHistory.some((item) => item?.title === workoutList?.title);
      if (!alreadyInHistory) {
        setWorkoutHistory([workoutList]);
      }
    }

    setIsWorkoutActive(isActive);
  }


  useEffect(() => {
    if (typeof workoutList === "object" && workoutList !== null) {
      checkNextWorkout();
      checkWorkoutActive();
    }
  }, [workoutList, nextUpWorkout, workoutHistory]);

  if (!fontsLoaded) {
    return null;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <HeaderComponent>
        <View style={HeaderStyles.headerLogoContainer}>
          <Image
            source={require("../assets/forge-logo.png")}
            style={HeaderStyles.headerLogo}
          />
          <Text style={HeaderStyles.headerTitle}>Forge</Text>
        </View>
      </HeaderComponent>
      <ScrollView>
        <StatusBar style="light" />


        {/* Content */}
        <ImageBackground
          source={require("../assets/athlete.png")}
          imageStyle={{ opacity: 0.15 }}
        >
          <View style={appStyles.container}>
            <Text style={[appStyles.titleQuote1]}>IGNITE YOURSELF</Text>
            <Text style={appStyles.titleQuote}>YOUR TRAINING,</Text>
            <Text style={[appStyles.titleQuote2]}>CHECKED OFF.</Text>

            {/* Stat trackers */}

            <View style={appStyles.statisticTrackersContainer}>


              {isWorkoutActive ? (
                <>
                  <StatisticTrackerComponent title="EXERCISES DONE">
                    <View style={appStyles.exercisesDoneTextContainer}>
                      <Text style={appStyles.exercisesDoneText}>
                        {workoutList.dates.filter(item => item.completed).length}
                      </Text>
                      <Text style={appStyles.exercisesDoneTextSmall}>
                        /{workoutList.dates.length}
                      </Text>
                    </View>


                    <View style={appStyles.sessionBar}>
                      {workoutList.dates.map((item, index) => (
                        <View
                          key={index}
                          style={[
                            item.completed
                              ? appStyles.sessionBarCompleted
                              : appStyles.sessionBarUncompleted,
                            index === 0 ? { paddingLeft: 4 } : null,
                            index === (workoutList.dates.length - 1)
                              ? { paddingRight: 4 }
                              : null,
                          ]}
                        >
                          <View
                            style={
                              item.completed
                                ? appStyles.sessionBarCompletedContent
                                : appStyles.sessionBarUncompletedContent
                            }
                          />
                        </View>
                      ))}
                    </View>
                  </StatisticTrackerComponent>

                  {/* Next up workout */}
                  <StatisticTrackerComponent
                    title={"NEXT UP"}
                  >
                    <View style={appStyles.nextUpTextContainer}>
                      <Text style={appStyles.nextUpTitle}>
                        {workoutList.title}
                      </Text>
                      <Text style={appStyles.nextUpDate}>
                        {new Date(nextUpWorkout).toDateString().split(" ").slice(0, 3).join("  |  ")}
                      </Text>
                    </View>
                    <View style={appStyles.openSessionButtonContainer}>


                      <TouchableOpacity
                        onPress={() => {
                          router.push({
                            pathname: workoutList?.title ? "TodaysWorkout" : "AddWorkout",
                          })
                        }}
                        style={appStyles.nextUpButton}
                      >
                        <Text style={appStyles.openSessionButtonText}>
                          {"OPEN EXERCISE"}
                        </Text>
                        <Text style={appStyles.openSessionButtonTextChevron}>
                          {">"}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </StatisticTrackerComponent></>
              ) : (
                <StatisticTrackerComponent
                  title={workoutHistory.length > 0 ? "Keep forging yourself and create a new workout!" : "Create your own workout!"}>
                  <View style={appStyles.nextUpTextContainer}>
                    <Text style={appStyles.nextUpTitle}>
                      {workoutHistory.length > 0 ? "WELL DONE!" : "Get active!"}
                    </Text>
                  </View>
                  <View style={appStyles.openSessionButtonContainer}>

                    <TouchableOpacity
                      onPress={() => {
                        router.push({
                          pathname: "AddWorkout"
                        })
                      }}
                      style={appStyles.nextUpButton}
                    >
                      <Text style={appStyles.openSessionButtonText}>
                        {"Create new sessions"}
                      </Text>
                      <Text style={appStyles.openSessionButtonTextChevron}>
                        {">"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </StatisticTrackerComponent>
              )}
            </View>
          </View>
        </ImageBackground>

        {/* Upcoming training sessions, ex week ahead? Can click on each workout and get passed to WorkoutDetailsComponent and hide Done button.*/}
      </ScrollView>
    </SafeAreaView>
  );
}
