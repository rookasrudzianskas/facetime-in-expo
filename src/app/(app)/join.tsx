//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import {useStreamVideoClient} from "@stream-io/video-react-native-sdk";

const JoinCall = () => {
  const client = useStreamVideoClient();
  const [callId, setCallId] = useState('');
  const onJoin = () => {
    const call = client?.call('default', callId);
    call.join();
    router.push('/call');
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
