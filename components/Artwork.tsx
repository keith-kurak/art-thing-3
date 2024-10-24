import { stripTags } from "@/lib/utils";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

type Props = {
  department: string;
  randomWork: any;
};

export function Artwork({ department, randomWork }: Props) {
  return (
    <View className="px-4 py-2 gap-y-2 sm:basis-1/2" key={department}>
      <Link asChild href={`/departments/${department}`}>
        <Pressable>
          <View className="flex-row items-center gap-x-2">
            <Text className="text-l">{department}</Text>
            <View className="flex-1 h-0.5 bg-shade-2" />
          </View>
        </Pressable>
      </Link>
      <Link asChild href={`/works/${randomWork.id}`}>
        <Pressable className="flex-row sm:flex-col gap-x-2 h-48 sm:h-96">
          <Image
            className="h-48 flex-1 sm:h-96 bg-shade-2"
            source={{
              uri: randomWork.images.web.url,
            }}
          />
          <View className="flex-1">
            <Text numberOfLines={3} className="text-xl font-semibold">
              {randomWork.title}
            </Text>
            {randomWork.creators.length ? (
              <Text numberOfLines={1} className="text-lg italic">
                {randomWork.creators[0].description}
              </Text>
            ) : null}
            <View className="flex-1 overflow-clip mt-2">
              {randomWork.did_you_know ? (
                <Text className="text-md">
                  {stripTags(randomWork.did_you_know)}
                </Text>
              ) : null}
            </View>
          </View>
        </Pressable>
      </Link>
    </View>
  );
}
