import { Stack } from "expo-router";

export default function Layout() {

  return (
    <Stack
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="departments" />
      <Stack.Screen name="works" options={{ presentation: "transparentModal"}} />
    </Stack>
  );
}