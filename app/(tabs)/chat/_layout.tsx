import React from "react";
import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          animation: "none",
        }}
      >
        <Stack.Screen
          name="chat"
          options={{
            title: "채팅",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="detail"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
