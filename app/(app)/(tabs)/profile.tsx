import { FlatList, View, Text } from "react-native";
import { Image } from "expo-image";
import { useFavsQuery } from "@/data/hooks/useFavsQuery";
import { LoadingShade } from "@/components/LoadingShade";
import { useAuth } from "@/data/hooks/useAuth";
import { Artwork } from "@/components/Artwork";
import { useMediaQuery } from "@/constants/useMediaQuery";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import classNames from "classnames";
import { Button } from "@/components/Button";

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
        ListEmptyComponent={
          <View className="gap-2 justify-center items-center flex-1 mt-14">
            <Text className="text-xl font-bold">No favorites</Text>
            <Text>Browse artworks to find some you like</Text>
          </View>
        }
        ListHeaderComponent={
          <View className="bg-white">
            <View className="py-4 px-4">
              <View className="flex-row items-center gap-x-2">
                <Image
                  className={classNames(
                    "h-16 sm:h-24",
                    "w-16 sm:w-24",
                    "rounded-full",
                  )}
                  source={require("@/assets/images/profile.png")}
                />
                <View className="flex-1">
                  <Text
                    className={classNames(
                      "text-xl sm:text-4xl",
                      "font-semibold",
                    )}
                  >
                    Your Name
                  </Text>
                  <Text className="italic font-light text-sm sm:text-base">
                    Member since 2023/03/14
                  </Text>
                </View>
                <Button onPress={() => logout()} label="Logout" />
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
