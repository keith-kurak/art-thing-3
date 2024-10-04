import { View, Text, FlatList, Pressable, ScrollView } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import { useDepartmentHighlightsQuery } from "@/data/hooks/useDepartmentHighlightsQuery";
import MediaCarousel from "@/lib/components/MediaCarousel";

export default function TabOneScreen() {
  const query = useDepartmentHighlightsQuery();

  return <ScrollView className="flex-1">
    {query.data?.map((department) => (
      <MediaCarousel
        data={department.works.map((work : any ) => ({
          title: work.title,
          imageUrl: work.images.web.url
        }))}
        title={<Link href="/">{department.department}</Link>}
      />
    ))}
  </ScrollView>;
}
