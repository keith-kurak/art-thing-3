import { View, Text, Pressable, ScrollView } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import { useRandomWorksQuery } from "@/data/hooks/useRandomWorksQuery";
import { stripTags } from "@/lib/utils";

export default function WhatsNewScreen() {
  const query = useRandomWorksQuery();

  return (
    <ScrollView contentContainerClassName="mb-safe lg:w-3/4 lg:self-center">
      <View className="gap-y-2 px-4 py-4">
        <Text className="text-4xl font-semibold">Welcome back!</Text>
        <Text>See what's new.</Text>
      </View>
      <View className="sm:flex-wrap sm:flex-row sm:flex-1">
        {query.data?.map((department) => (
          <View
            className="px-4 py-2 gap-y-2 sm:basis-1/2"
            key={department.department}
          >
            <Link asChild href={`./departments/${department.department}`}>
              <Pressable>
                <View className="flex-row items-center gap-x-2">
                  <Text className="text-l">{department.department}</Text>
                  <View className="flex-1 h-0.5 bg-shade-2" />
                </View>
              </Pressable>
            </Link>
            <Link asChild href={`/works/${department.randomWork.id}`}>
              <Pressable className="flex-row sm:flex-col gap-x-2 h-48 sm:h-96">
                <Image
                  className="h-48 flex-1 sm:h-96"
                  source={{
                    uri: department.randomWork.images.web.url,
                  }}
                />
                <View className="flex-1">
                  <Text numberOfLines={3} className="text-xl font-semibold">
                    {department.randomWork.title}
                  </Text>
                  {department.randomWork.creators.length ? (
                    <Text numberOfLines={1} className="text-lg italic">
                      {department.randomWork.creators[0].description}
                    </Text>
                  ) : null}
                  <View className="flex-1 overflow-clip mt-2">
                    {department.randomWork.did_you_know ? (
                      <Text className="text-md">
                        {stripTags(department.randomWork.did_you_know)}
                      </Text>
                    ) : null}
                  </View>
                </View>
              </Pressable>
            </Link>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
