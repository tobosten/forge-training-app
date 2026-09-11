import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        /* fade_from_bottom */ animation: "fade_from_bottom",
      }}
    >
      <Stack.Screen name="App" options={{ headerShown: false }} />
      <Stack.Screen name="AddWorkout" options={{ headerShown: false }} />
      <Stack.Screen name="TodaysWorkout" options={{ headerShown: false }} />
    </Stack>
  );
}
