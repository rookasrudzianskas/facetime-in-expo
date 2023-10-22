import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View  } from 'react-native';

import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User,
} from '@stream-io/video-react-native-sdk';
import { useEffect, useState } from 'react';

const apiKey = 'r56ue2bjerbr';
const userId = 'rokas';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicm9rYXMifQ.wC88UAO34NQFOXCxSMS7fuqdip_38kDoM9a18Wx9q7k';
const callId = 'my-call-id';
const user: User = { id: userId };

export default function ModalScreen() {
  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
