import React from "react";
import { Stack } from "expo-router";

export const unstable_settings = {
  exhibits: {
    initialRouteName: "exhibits/index",
  },
};

export default function StackLayout() {
  return (
    <Stack>
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
