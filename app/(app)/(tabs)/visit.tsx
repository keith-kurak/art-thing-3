import { useEffect } from "react";
import {
  Platform,
  ScrollView,
  View,
  Text,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Image } from "expo-image";
import { Stack } from "expo-router";
import { useMediaQuery } from "@/constants/useMediaQuery";
import * as Application from "expo-application";
import * as Updates from "expo-updates";

export default function VisitScreen() {
  return (
    <View className="flex-1">
      <ScrollView
        className="bg-shade-1"
        contentContainerClassName="mb-safe sm:w-3/4 sm:self-center"
      >
        <View className="row-y-2 px-4 py-2">
          <Text className="text-4xl font-semibold text-center">
            The Cleveland Museum of Art
          </Text>
          <Text className="text-xl text-center">
            11150 East Boulevard, Cleveland, OH, 44106
          </Text>
          <Text className="text-xl text-center">888-CMA-0033</Text>
        </View>
        <Text className="text-xl px-4 py-2 font-semibold bg-shade-2">
          Admission
        </Text>
        <Text className="text-xl px-4 py-2">
          General admission is always free
        </Text>
        <Text className="text-xl px-4 py-2 font-semibold bg-shade-2">
          Hours
        </Text>
        <View className="row-y-2 px-4 py-2">
          <DailyHours day="Sunday" hours="10:00 a.m.–5:00 p.m." />
          <DailyHours day="Monday" hours="Closed" />
          <DailyHours day="Tuesday" hours="10:00 a.m.–5:00 p.m." />
          <DailyHours day="Wednesday" hours="10:00 a.m.–9:00 p.m." />
          <DailyHours day="Thursday" hours="10:00 a.m.–5:00 p.m." />
          <DailyHours day="Friday" hours="10:00 a.m.–9:00 p.m." />
          <DailyHours day="Saturday" hours="10:00 a.m.–5:00 p.m." />
        </View>
        <View className="px-4 py-2">
          <Image
            className="h-96 w-full"
            source={require("@/assets/images/map.png")}
            contentFit="contain"
          />
        </View>
      </ScrollView>
    </View>
  );
}

function DailyHours({ day, hours }: { day: string; hours: string }) {
  return (
    <View className="flex-row justify-between">
      <Text className="text-xl flex-1">{day}</Text>
      <Text className="text-xl">{hours}</Text>
    </View>
  );
}
