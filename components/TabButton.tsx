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
        className={
          "justify-between items-center gap-y-1 px-2 flex-col" +
          (isFocused ? " sm:bg-shade-3" : "")
        }
      >
        <MaterialIcons
          className={"sm:hidden" + (isFocused ? " color-tint" : "")}
          name={icon}
          size={24}
        />
        <Text
          className={
            " text-md sm:text-lg" +
            (isFocused ? " sm:text-white color-tint" : "")
          }
        >
          {children}
        </Text>
      </Pressable>
    );
  }
);
