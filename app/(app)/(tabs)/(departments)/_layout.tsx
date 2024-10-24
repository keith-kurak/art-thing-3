import React from "react";
import { Stack } from "expo-router";
import { Platform } from "react-native";
import colors from "@/constants/colors";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "(departments)/department/index",
};

export default function StackLayout() {
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: colors.white } }}>
      <Stack.Screen
        name="(departments)/departments/index"
        options={{
          title: "Departments",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(department)/works/[id]/index"
        options={{
          ...Platform.select({
            web: {
              presentation: "transparentModal",
              animation: "fade",
            },
            default: {
              presentation: "modal",
            },
          }),
          headerShown: false,
        }}
      />
    </Stack>
  );
}
