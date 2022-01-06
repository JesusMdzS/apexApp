import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { LegendScreen } from "../screens/LegendScreen";

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
          title: "Legends",
        }}
      />
    </Stack.Navigator>
  );
};
