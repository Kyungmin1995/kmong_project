import React from "react";
import { Stack } from "expo-router";
import Header from "@/components/Header";
import { Platform, SafeAreaView, View } from "react-native";

export default function StackLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          animation: "none",
        }}
      >
        <Stack.Screen
          name="post"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
