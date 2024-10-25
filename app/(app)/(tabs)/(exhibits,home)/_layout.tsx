import React from "react";
import { Stack } from "expo-router";
import colors from "@/constants/colors";

export const unstable_settings = {
  initialRouteName: "index",
  exhibits: {
    initialRouteName: "exhibits/index", // doesn't seem like how I was supposed to do it in the docs
  },
};

export default function StackLayout() {
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: colors.white } }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="exhibits/index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
