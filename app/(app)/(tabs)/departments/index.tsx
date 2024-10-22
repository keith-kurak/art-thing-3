import { View, Text, FlatList, Pressable } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import { useDepartmentsQuery } from "@/data/hooks/useDepartmentsQuery";
import { useMediaQuery } from "@/constants/useMediaQuery";

export default function TabOneScreen() {
  const query = useDepartmentsQuery();

  const { isSm } = useMediaQuery();

  return (
    <View className="flex-1">
      <FlatList<{ department: string; imageUrl: string }>
        key={isSm ? "large" : "small"}
        numColumns={isSm ? 2 : 1}
        data={query.data}
        contentContainerClassName="my-safe lg:w-3/4 lg:self-center"
        keyExtractor={(item) => item.department}
        renderItem={({ item }) => (
          <Link asChild href={`/departments/${item.department}`}>
            <Pressable className="sm:flex-1 sm:m-4">
              <Image
                className="h-24 w-full sm:h-56"
                source={{
                  uri: item.imageUrl,
                }}
              />
              <Text className="absolute right-2 bottom-2 text-3xl text-white font-semibold text-right">
                {item.department}
              </Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}
