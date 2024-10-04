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

const useRNTabs = false;

export default function TabLayout() {
  if (useRNTabs) {
    return <OldTabs />;
  }

  const { isLarge } = useMediaQuery();

  const tabs = (
    <TabList className="py-3 px-8 sm:justify-end">
      <TabTrigger name="index" href="/" asChild style={styles.tabTrigger}>
        <TabButton icon="museum">Home</TabButton>
      </TabTrigger>
      <TabTrigger
        name="departments"
        asChild
        href="/departments"
        style={styles.tabTrigger}
      >
        <TabButton icon="palette">Exhibits</TabButton>
      </TabTrigger>
      <TabTrigger name="visit" asChild href="/visit" style={styles.tabTrigger}>
        <TabButton icon="map">Visit</TabButton>
      </TabTrigger>
      <TabTrigger
        name="profile"
        asChild
        href="/profile"
        style={styles.tabTrigger}
      >
        <TabButton icon="person">Profile</TabButton>
      </TabTrigger>
    </TabList>
  );

  return (
    <Tabs style={styles.root}>
      {isLarge && tabs}
      <View className="flex-1">
        <TabSlot />
      </View>
      {!isLarge && tabs}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  behaviorRoot: {
    flexDirection: "row",
  },
  tabList: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  tabTrigger: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    gap: 5,
    padding: 10,
  },
});

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
