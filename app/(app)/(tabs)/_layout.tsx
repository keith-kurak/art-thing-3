import React from "react";
import { View } from "react-native";
import { Tabs, TabList, TabSlot, TabTrigger } from "expo-router/build/ui";
import { Tabs as RNTabs } from "expo-router";
import customColors from "@/constants/colors";
import { TabBarIcon } from "@/components/TabBarIcon";
import { TabButton } from "@/components/TabButton";
import { Image } from "expo-image";
import classNames from "classnames";

const useRNTabs = false;

export default function TabLayout() {
  if (useRNTabs) {
    return <OldTabs />;
  }

  const tabs = (
    <TabList
      className={classNames(
        "py-3 sm:py-6",
        "px-6 sm:px-8",
        "mx-2 sm:mx-0",
        "bottom-safe-offset-2 sm:bottom-safe-offset-0",
        "rounded-full sm:rounded-none",
        "absolute right-0 left-0 sm:relative",
        "shadow-sm sm:shadow-none",
        "sm:justify-end sm:gap-x-4 sm:shadow-sm",
        "bg-white",
      )}
    >
      <TabTrigger name="index" href="/" asChild>
        <TabButton icon="museum">Home</TabButton>
      </TabTrigger>
      <TabTrigger name="departments" asChild href="/departments" reset="always">
        <TabButton icon="palette">Exhibits</TabButton>
      </TabTrigger>
      <TabTrigger name="visit" asChild href="/visit">
        <TabButton icon="map">Visit</TabButton>
      </TabTrigger>
      <TabTrigger name="profile" asChild href="/profile">
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
      <View
        className={classNames(
          "hidden sm:inline",
          "absolute left-6 top-5 h-10 w-52",
        )}
      >
        <Image
          source={require("@/assets/images/logo.svg")}
          className="w-full h-full"
        />
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
