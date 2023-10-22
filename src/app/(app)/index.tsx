//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useStreamVideoClient} from "@stream-io/video-react-native-sdk";

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
  const client = useStreamVideoClient();

  const onCreateCall = () => {
    if(!client) {
      return;
    }

    const callId = 'default_testing123';
    client.call('default', callId);
  }

  return (
    <View className="flex-1">
      <Stack.Screen options={{ title: 'FaceTime' }} />

      <View className="flex flex-row justify-between items-center">
        <TouchableOpacity onPress={onCreateCall} activeOpacity={0.7} className="bg-blue-500 px-4 py-2">
          <Text>Create FaceTime</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} className="bg-blue-500 px-4 py-2">
          <Text>Join FaceTime</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
