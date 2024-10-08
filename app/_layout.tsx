import { FlatList, ScrollView } from 'react-native';
import { Image } from "expo-image";
import { Slot } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { cssInterop, remapProps } from "nativewind";
import "@/global.css";

// component interops for nativewind - just need these once
cssInterop(Image, { className: "style" });

remapProps(FlatList, {
  className: "style",
  contentContainerClassName: "contentContainerStyle",
});

remapProps(ScrollView, {
  className: "style",
  contentContainerClassName: "contentContainerStyle",
});

// TODO: Auth & Redirect
export default function App() {
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}><Slot /></QueryClientProvider>;
}
