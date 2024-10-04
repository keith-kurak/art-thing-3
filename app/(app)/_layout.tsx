import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack, Link } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { View, FlatList, ScrollView, Pressable, Platform } from "react-native";
import { TabBarIcon } from "@/components/TabBarIcon";
import React from "react";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
      <View className="flex-1 sm:w-7/12 sm:self-center">
        <View className="max-sm:hidden py-4 flex-row gap-x-4 justify-end">
          <Link href="/(tabs)" asChild>
            <Pressable>
              <TabBarIcon type="MaterialIcons" name="museum" />
            </Pressable>
          </Link>
          <Link href="/(tabs)/two" asChild>
            <Pressable>
              <TabBarIcon type="FontAwesome" name="star" />
            </Pressable>
          </Link>
          <Link href="/visit" asChild>
            <Pressable>
              <TabBarIcon type="FontAwesome" name="info-circle" />
            </Pressable>
          </Link>
        </View>
        <Stack
          screenOptions={{
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="visit" options={{ presentation: "modal" }} />
          <Stack.Screen name="help" options={{ presentation: "modal" }} />
        </Stack>
        <View className="max-sm:hidden h-8" />
      </View>
  );
}
