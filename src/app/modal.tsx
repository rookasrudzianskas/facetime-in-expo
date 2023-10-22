import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View  } from 'react-native';

import {
  CallContent,
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User,
} from '@stream-io/video-react-native-sdk';
import { useEffect, useState } from 'react';
import {client} from "../lib/stream";

const callId = 'default_cfac32cf-afb2-49ab-ad78-655c2604da5d';

export default function ModalScreen() {
  const [call] = useState(() => client.call('default', callId));

  useEffect(() => {
    call.join({ create: true });
  }, [call]);

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
