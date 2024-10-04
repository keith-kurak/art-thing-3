import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { Href, Link } from "expo-router";
import { useFavsQuery } from "@/data/hooks/useFavsQuery";
import { LoadingShade } from "@/components/LoadingShade";

export default function TabTwoScreen() {
  const favsQuery = useFavsQuery();

  const favs = favsQuery.data;

  return (
    <View className="flex-1 bg-shade-1">
      <FlatList
        data={favs}
        ListHeaderComponent={
          <View>
            <View className="py-4 px-4">
              <View className="flex-row items-center gap-x-2">
                <Image
                  className="h-24 w-24 rounded-full"
                  source={require("@/assets/images/profile.png")}
                />
                <View>
                  <Text className="text-4xl font-semibold text-center">
                    Your Name
                  </Text>
                  <Text className="italic">Member since 2023/03/14</Text>
                </View>
              </View>
            </View>
            <Text className="text-xl px-4 py-2 font-semibold bg-shade-2">
              Favorites
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.imageContainerStyle}>
            <Link asChild href={`/works/${item.id}/` as Href}>
              <TouchableOpacity
                key={item.id}
                style={{ flex: 1 }}
                onPress={() => {}}
              >
                <Image
                  style={styles.imageStyle}
                  source={{
                    uri: item.image,
                  }}
                />
              </TouchableOpacity>
            </Link>
          </View>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
      />
      <LoadingShade isLoading={favsQuery.isLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  titleStyle: {
    padding: 16,
    fontSize: 20,
    color: "white",
    backgroundColor: "green",
  },
  imageContainerStyle: {
    flex: 1,
    flexDirection: "column",
    margin: 1,
  },
  imageStyle: {
    height: 120,
    width: "100%",
  },
  fullImageStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "98%",
    resizeMode: "contain",
  },
  modelStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  closeButtonStyle: {
    width: 25,
    height: 25,
    top: 50,
    right: 20,
    position: "absolute",
  },
});
