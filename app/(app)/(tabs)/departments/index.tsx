import { Text, FlatList, Pressable } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import { useDepartmentsQuery } from "@/data/hooks/useDepartmentsQuery";
import { useMediaQuery } from "@/constants/useMediaQuery";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabOneScreen() {
  const query = useDepartmentsQuery();
  const { bottom } = useSafeAreaInsets();

  const { isSm } = useMediaQuery();

  return (
    <FlatList<{ department: string; imageUrl: string }>
      key={isSm ? "large" : "small"}
      numColumns={isSm ? 2 : 1}
      data={query.data}
      contentContainerStyle={{ paddingBottom: bottom + (isSm ? 40 : 130) }}
      contentContainerClassName="my-safe lg:w-3/4 lg:self-center"
      keyExtractor={(item) => item.department}
      renderItem={({ item }) => (
        <Link asChild href={`/departments/${item.department}`}>
          <Pressable className="sm:flex-1 m-4">
            <Image
              className="w-full aspect-square"
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
  );
}
