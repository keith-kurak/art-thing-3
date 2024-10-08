import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Platform,
  ScrollView,
  View,
  Text,
  Pressable,
  ActivityIndicator,
  TextInput,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {};

  return (
    <View className="flex-1 justify-center items-center gap-y-4 bg-shade-0">
      <TextField label="Email" text={email} setText={setEmail} autofocus />
      <TextField
        label="Password"
        text={password}
        setText={setPassword}
        isSecure
      />
      <Pressable onPress={login}>
        <View className="py-4 px-8 bg-tint">
          <Text className="text-white">Login</Text>
        </View>
      </Pressable>
    </View>
  );
}

function TextField({
  text,
  setText,
  label,
  isSecure,
  autofocus,
}: {
  text: string;
  setText: (text: string) => void;
  label: string;
  isSecure?: boolean;
  autofocus?: boolean;
}) {
  return (
    <View className="flex-row gap-x-2">
      <Text className="text-end w-32 text-lg">{`${label}:`}</Text>
      <TextInput
        onChangeText={setText}
        value={text}
        secureTextEntry={isSecure}
        autoFocus={autofocus}
        className="w-30 border-b border-gray-400 text-lg"
      />
    </View>
  );
}
