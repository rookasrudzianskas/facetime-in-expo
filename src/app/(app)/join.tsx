//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button, Alert} from 'react-native';
import {useStreamVideoClient} from "@stream-io/video-react-native-sdk";
import {useRouter} from "expo-router";

const JoinCall = () => {
  const router = useRouter();
  const client = useStreamVideoClient();
  const [callId, setCallId] = useState('');
  const onJoin = () => {
    const call = client?.call('default', callId);
    try {
      await call.join();
      router.push('/call');
    } catch (e) {
      console.log(e);
      Alert.alert('Error', e.message);
    }
  }

  return (
    <View className="flex flex-col items-center justify-center">
      <Text className="text-lg">
        Join a call
      </Text>
      <TextInput value={callId} onChangeText={setCallId} placeholder={'enter id of the facetime'} className="h-10 w-full border" />
      <Button title={'Join'} onPress={onJoin} />
    </View>
  );
};

export default JoinCall;
