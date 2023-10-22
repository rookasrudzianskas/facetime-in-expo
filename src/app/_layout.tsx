import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import React, {useEffect, useState} from 'react';
import { useColorScheme } from 'react-native';
import { PermissionsAndroid, Platform } from 'react-native';
import {client} from "../lib/stream";
import {StreamVideo} from "@stream-io/video-react-native-sdk";
import {Session} from "@supabase/supabase-js";
import {supabase} from "../lib/supabase";
import {AuthProvider} from "../context/AuthProvider";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    const run = async () => {
      if (Platform.OS === 'android') {
        await PermissionsAndroid.requestMultiple([
          'android.permission.POST_NOTIFICATIONS',
          'android.permission.BLUETOOTH_CONNECT',
        ]);
      }
    };
    run();
  }, []);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <AuthProvider>
      <StreamVideo client={client}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(app)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ headerShown: false }} />
          </Stack>
        </ThemeProvider>
      </StreamVideo>
    </AuthProvider>
  );
}
