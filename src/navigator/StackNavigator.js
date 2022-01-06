import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { LegendScreen } from "../screens/LegendScreen";
import { MeetLegends } from "../screens/MeetLegends";
import { NewsScreen } from "../screens/NewsScreen";
import { MapsScreen } from "../screens/MapsScreen";
import { TrackerScreen } from "../screens/TrackerScreen";
const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="LegendScreen"
        component={LegendScreen}
        options={{
          gestureEnabled: true,
          title: "Menu",
        }}
      />
      <Stack.Screen
        name="MeetLegends"
        component={MeetLegends}
        options={{
          gestureEnabled: true,
          title: "Legends",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{
          gestureEnabled: true,
          title: "News",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="MapsScreen"
        component={MapsScreen}
        options={{
          gestureEnabled: true,
          title: "Maps",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="TrackerScreen"
        component={TrackerScreen}
        options={{
          gestureEnabled: true,
          title: "Tracker",
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};
