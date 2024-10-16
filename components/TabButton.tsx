import { MaterialIcons } from "@expo/vector-icons";
import { TabTriggerSlotProps } from "expo-router/build/ui";
import { ComponentProps, Ref, forwardRef } from "react";
import { Text, Pressable, View } from "react-native";

type Icon = ComponentProps<typeof MaterialIcons>["name"];

export type TabButtonProps = TabTriggerSlotProps & {
  icon?: Icon;
};

export const TabButton = forwardRef(
  ({ icon, children, isFocused, ...props }: TabButtonProps, ref: Ref<View>) => {
    return (
      <Pressable
        ref={ref}
        {...props}
        className="justify-between items-center gap-y-2 p-4 flex-col sm:bg-shade-2"
      >
        <MaterialIcons className="sm:hidden" name={icon} />
        <Text className="sm:text-white text-md sm:text-lg">{children}</Text>
      </Pressable>
    );
  }
);
