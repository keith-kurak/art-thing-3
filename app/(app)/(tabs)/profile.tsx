import { FlatList, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useFavsQuery } from "@/data/hooks/useFavsQuery";
import { LoadingShade } from "@/components/LoadingShade";
import { useAuth } from "@/data/hooks/useAuth";
import { Artwork } from "@/components/Artwork";
import { useMediaQuery } from "@/constants/useMediaQuery";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const { isSm } = useMediaQuery();
  const favsQuery = useFavsQuery();
  const { bottom } = useSafeAreaInsets();

  const favs = favsQuery.data;

  const { logout } = useAuth();

  return (
    <View className="flex-1">
      <FlatList
        data={favs}
        key={isSm ? "large" : "small"} // to force a re-render when numColumns changes
        contentContainerStyle={{ paddingBottom: bottom + (isSm ? 0 : 90) }}
        numColumns={isSm ? 2 : 1}
        contentContainerClassName="my-safe lg:w-3/4 lg:self-center"
        ListHeaderComponent={
          <View>
            <View className="py-4 px-4">
              <View className="flex-row items-center gap-x-2">
                <Image
                  className="h-24 w-24 rounded-full"
                  source={require("@/assets/images/profile.png")}
                />
                <View className="flex-1">
                  <Text className="text-4xl font-semibold">Your Name</Text>
                  <Text className="italic font-light">
                    Member since 2023/03/14
                  </Text>
                </View>
                <Pressable
                  onPress={() => {
                    logout();
                  }}
                >
                  <View className="py-4 px-8 bg-black">
                    <Text className="text-white font-semibold tracking-widest">
                      Logout
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
            <Text className="text-2xl tracking-widest px-4 py-2 font-semibold">
              Favorites
            </Text>
          </View>
        }
        renderItem={({ item }) => <Artwork artwork={item.artwork} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <LoadingShade isLoading={favsQuery.isLoading} />
    </View>
  );
}
