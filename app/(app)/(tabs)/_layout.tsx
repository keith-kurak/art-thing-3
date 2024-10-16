import React from "react";
import { View, StyleSheet, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, TabList, TabSlot, TabTrigger } from "expo-router/build/ui";
import { Link, Tabs as RNTabs } from "expo-router";
import { Pressable } from "react-native";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import customColors from "@/constants/colors";
import { TabBarIcon } from "@/components/TabBarIcon";
import { useMediaQuery } from "@/constants/useMediaQuery";
import { TabButton } from "@/lib/components/TabButton";
import { MaterialIcons } from "@expo/vector-icons";

const useRNTabs = false;

export default function TabLayout() {
  if (useRNTabs) {
    return <OldTabs />;
  }

  const tabs = (
    <TabList className="py-3 px-8 sm:justify-end sm:gap-x-4">
      <TabTrigger name="index" href="/" asChild>
        <TabButton icon="museum">Home</TabButton>
      </TabTrigger>
      <TabTrigger
        name="departments"
        asChild
        href="/departments"
      >
        <TabButton icon="palette">Exhibits</TabButton>
      </TabTrigger>
      <TabTrigger name="visit" asChild href="/visit">
        <TabButton icon="map">Visit</TabButton>
      </TabTrigger>
      <TabTrigger
        name="profile"
        asChild
        href="/profile"
      >
        <TabButton icon="person">Profile</TabButton>
      </TabTrigger>
    </TabList>
  );

  return (
    <View className="flex-1">
      <Tabs className="flex-1 sm:flex-col-reverse">
        <View className="flex-1">
          <TabSlot />
        </View>
        {tabs}
      </Tabs>
      <View className="hidden sm:inline absolute left-2 top-4 flex-row align-middle">
        <MaterialIcons name="museum" size={28} color={customColors.tint} />
        <Text className="text-xl color-tint ml-2">Cleveland Museum of Art</Text>
      </View>
    </View>
  );
}

function OldTabs() {
  return (
    <RNTabs
      screenOptions={{
        headerShown: false,
        lazy: false,
      }}
    >
      <RNTabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarActiveTintColor: customColors.tint,
          tabBarIcon: ({ color }) => (
            <TabBarIcon type="MaterialIcons" name="museum" color={color} />
          ),
        }}
      />
      <RNTabs.Screen
        name="departments"
        options={{
          title: "Exhibits",
          tabBarIcon: ({ color }) => (
            <TabBarIcon type="MaterialIcons" name="palette" color={color} />
          ),
        }}
      />
      <RNTabs.Screen
        name="visit"
        options={{
          title: "Visit",
          tabBarIcon: ({ color }) => (
            <TabBarIcon type="MaterialIcons" name="map" color={color} />
          ),
        }}
      />
      <RNTabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <TabBarIcon type="MaterialIcons" name="person" color={color} />
          ),
        }}
      />
    </RNTabs>
  );
}
