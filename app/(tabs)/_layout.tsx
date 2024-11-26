import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack, Tabs } from "expo-router";
import { width } from "@/globalDimension";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return (
    <FontAwesome size={width * 28} style={{ marginBottom: -3 }} {...props} />
  );
}

export default function TabLayout() {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="index"
        options={{
          title: "홈",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
