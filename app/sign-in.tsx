import { useState, useEffect } from "react";
import {
  Platform,
  ScrollView,
  View,
  Text,
  Pressable,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { useAuth } from "@/data/hooks/useAuth";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center gap-y-4 bg-shade-0">
      <TextField label="Email" text={email} setText={setEmail} autofocus />
      <TextField
        label="Password"
        text={password}
        setText={setPassword}
        isSecure
      />
      <Pressable
        onPress={async () => {
          await login(email, password);
          router.replace("/(app)");
        }}
      >
        <View className="py-4 px-8 bg-tint">
          <Text className="text-white">Sign in</Text>
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
    <View className="gap-y-2">
      <Text className="text-end text-md">{`${label}:`}</Text>
      <TextInput
        onChangeText={setText}
        value={text}
        secureTextEntry={isSecure}
        autoFocus={autofocus}
        className="w-48 border-b border-gray-400 text-lg"
      />
    </View>
  );
}
