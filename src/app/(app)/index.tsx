//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const HomeScreen = () => {
  return (
    <View className="flex-1">
      <Stack.Screen options={{ title: 'FaceTime' }} />

      <View className="flex flex-row justify-between items-center">
        <TouchableOpacity activeOpacity={0.7} className="bg-blue-500 px-4 py-2">
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
