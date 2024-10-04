import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { View, Text } from "react-native";

type Media = {
  title?: string;
  imageUrl?: string;
};

export function MediaCard({
  item,
  width = 154,
}: {
  item: Media;
  width?: 92 | 154 | 185 | 342 | 500;
}) {
  return (
    <Link href={`/`}>
      <View style={{ width }}>
        {item.imageUrl ? (
          <Image
            source={item.imageUrl}
            alt=""
            style={{
              width,
              aspectRatio: "2/3",
            }}
          />
        ) : (
          <View className="flex flex-1 bg-zinc-800 items-center justify-center">
            <MaterialIcons
              name="question-mark"
              className="text-zinc-500 border-zinc-500 rounded-full border-2"
              size={35}
            />
          </View>
        )}
        <Text className="mt-1 truncate text-lg " key="a" numberOfLines={1}>
          {item.title}
        </Text>
      </View>
    </Link>
  );
}
