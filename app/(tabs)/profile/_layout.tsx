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
          name="profile"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
