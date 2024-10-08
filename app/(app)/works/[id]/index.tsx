import {
  View,
  Text,
  ScrollView,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import Icon from "@expo/vector-icons/MaterialIcons";
import { useWorkByIdQuery } from "@/data/hooks/useWorkByIdQuery";
import { useFavStatusQuery } from "@/data/hooks/useFavStatusQuery";
import { useFavStatusMutation } from "@/data/hooks/useFavStatusMutation";
import colors from "@/constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LoadingShade } from "@/components/LoadingShade";
import { stripTags } from "@/lib/utils";

export default function WorkScreen() {
  const insets = useSafeAreaInsets();

  const { id } = useLocalSearchParams<{
    id: string;
  }>();

  // query art API for the work
  const workQuery = useWorkByIdQuery(id);
  const work = workQuery.data;

  // read fav status
  const favQuery = useFavStatusQuery(id);
  const isFav = favQuery.data;

  // update fav status
  const favMutation = useFavStatusMutation();

  return (
    <View className="flex-1 bg-opacity-50 bg-black justify-center">
      <View className=" bg-shade-1 flex-1 lg:flex-none sm:my-20 sm:w-3/4 sm:self-center">
        <Stack.Screen
          options={{
            title: work?.title || "Loading...",
            presentation: "transparentModal",
            animation: "fade",
            headerShown: false,
          }}
        />
        <ScrollView
          contentContainerStyle={{ paddingBottom: insets.bottom }}
          contentContainerClassName="bg-shade-1"
        >
          <View className="flex-row align-middle">
            <View className="justify-center px-2">
              <Pressable
                onPress={() => {
                  router.back();
                }}
                className="justify-center items-middle"
              >
                <Icon name="close" size={28} />
              </Pressable>
            </View>
            <Text className="flex-1 font-semibold text-3xl px-4 py-2">
              {work?.title}
            </Text>
            <View className="justify-center px-4">
              <Pressable
                className="active:opacity-50"
                disabled={favQuery.isLoading || favMutation.isPending}
                onPress={() => {
                  favMutation.mutate({ id, status: !isFav });
                }}
              >
                <Icon
                  name={isFav ? "star" : "star-border"}
                  color={colors.tint}
                  size={28}
                />
              </Pressable>
            </View>
          </View>
          <View className="flex-1 lg:flex-row">
            <View className="py-4 px-4 h-96 w-96 lg:h-[500px] lg:w-[500px] self-center">
              <Image
                className="flex-1"
                source={{ uri: work && work.images.web.url }}
                contentFit="contain"
                transition={500}
              />
            </View>
            <View className="flex-1">
              <View className="px-4 gap-y-2 py-2">
                {work?.creators.length ? (
                  <Text className="text-l">{work.creators[0].description}</Text>
                ) : null}
                <Text className="text-l">{work?.date_text}</Text>
                <Text className="text-l">{work?.technique}</Text>
              </View>
              {work?.description && (
                <>
                  <Text className="text-xl font-semibold px-4 py-2 bg-shade-2">
                    Description
                  </Text>
                  <View className="px-4 gap-y-2 py-2">
                    <Text className="text-l">
                      {stripTags(work.description)}
                    </Text>
                  </View>
                </>
              )}
              {work?.did_you_know && (
                <>
                  <Text className="text-xl font-semibold px-4 py-2 bg-shade-2">
                    Did you know?
                  </Text>
                  <View className="px-4 gap-y-2 py-2">
                    <Text className="text-l">
                      {stripTags(work.did_you_know)}
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
        <LoadingShade isLoading={workQuery.isLoading || favQuery.isLoading} />
      </View>
    </View>
  );
}
