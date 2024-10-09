import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack, Link, Redirect } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { View, FlatList, ScrollView, Pressable, Platform } from "react-native";
import { TabBarIcon } from "@/components/TabBarIcon";
import React from "react";
import { useAuth } from "@/data/hooks/useAuth";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { authToken } = useAuth();

  if (!authToken) {
    return <Redirect href="/sign-in" />
  }
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
