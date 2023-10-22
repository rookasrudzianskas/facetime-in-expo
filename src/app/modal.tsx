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

const apiKey = 'r56ue2bjerbr';
const userId = 'rokas';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicm9rYXMifQ.wC88UAO34NQFOXCxSMS7fuqdip_38kDoM9a18Wx9q7k';
const callId = 'test123';
const user: User = { id: userId };

export default function ModalScreen() {
  const [client] = useState(
    () => new StreamVideoClient({ apiKey, user, token }),
  );

  const [call] = useState(() => client.call('default', callId));

  useEffect(() => {
    call.join({ create: true });
  }, [call]);

  return (
    <View className="flex-1">
      <StreamVideo client={client}>
        <StreamCall call={call}>
          <CallContent />
        </StreamCall>
      </StreamVideo>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
