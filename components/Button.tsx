import classNames from "classnames";
import { Pressable, Text, View } from "react-native";

type Props = {
  onPress: () => void;
  label: string;
  type?: "primary" | "secondary";
};

export function Button({ onPress, label, type = "primary" }: Props) {
  return (
    <Pressable onPress={onPress}>
      <View
        className={classNames(
          "py-3 sm:py-4",
          "px-6 sm:px-8",
          type === "primary" && "bg-black",
          type === "secondary" && "bg-tint",
        )}
      >
        <Text className="text-white font-semibold tracking-widest">
          {label}
        </Text>
      </View>
    </Pressable>
  );
}
