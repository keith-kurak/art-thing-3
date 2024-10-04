import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import customColors from "@/constants/colors";
import { TabBarIcon } from '@/components/TabBarIcon';
import { useMediaQuery } from '@/constants/useMediaQuery';

export default function TabLayout() {
  const { isLarge } = useMediaQuery();
  return (
    <Tabs
      screenOptions={{
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
        lazy: false,
        tabBarStyle: {
          display: isLarge ? "none" : "flex",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarActiveTintColor: customColors.tint,
          tabBarIcon: ({ color }) => (
            <TabBarIcon type="MaterialIcons" name="museum" color={color} />
          ),
          headerRight: () => (
            <Link className="sm:hidden" href="/visit" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={customColors.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="departments"
        options={{
          title: "Exhibits",
          tabBarIcon: ({ color }) => (
            <TabBarIcon type="MaterialIcons" name="palette" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="visit"
        options={{
          title: "Visit",
          tabBarIcon: ({ color }) => (
            <TabBarIcon type="MaterialIcons" name="map" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <TabBarIcon type="MaterialIcons" name="person" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
