import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View  } from 'react-native';

import {
  CallContent,
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User, useStreamVideoClient,
} from '@stream-io/video-react-native-sdk';
import { useEffect, useState } from 'react';

const callId = 'default_cfac32cf-afb2-49ab-ad78-655c2604da5d';

export default function ModalScreen() {
  const client = useStreamVideoClient();
  const [call] = useState(() => client?.call('default', callId));
  //
  // useEffect(() => {
  //   call?.join({ create: true });
  // }, [call]);

  if(!call) return <Text>No call at all</Text>

  return (
    <View className="flex-1">
      <StreamCall call={call}>
        <CallContent />
      </StreamCall>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
