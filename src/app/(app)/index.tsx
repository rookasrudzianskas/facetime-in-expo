//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {useStreamVideoClient} from "@stream-io/video-react-native-sdk";
import {useRouter} from "expo-router";
import {supabase} from "../../lib/supabase";

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

const HomeScreen = () => {
  const router = useRouter();
  const client = useStreamVideoClient();

  const onCreateCall = () => {
    if(!client) {
      return;
    }

    const callId = generateRandomString(10);
    const call = client.call('default', callId);
    call.join({ create: true });
    router.push('/call');
  }

  return (
    <View className="flex-1">
      <Stack.Screen options={{ title: 'FaceTime' }} />

      <View className="flex flex-row justify-between items-center">
        <TouchableOpacity onPress={onCreateCall} activeOpacity={0.7} className="bg-blue-500 px-4 py-2">
          <Text>Create FaceTime</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/join')} activeOpacity={0.7} className="bg-blue-500 px-4 py-2">
          <Text>Join FaceTime</Text>
        </TouchableOpacity>
      </View>

      <Button onPress={() => supabase.auth.signOut()} title={'Sign out'} />
    </View>
  );
};

export default HomeScreen;
