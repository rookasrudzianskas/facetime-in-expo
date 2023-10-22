//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

const JoinCall = () => {

  const onJoin = () => {

  }

  return (
    <View className="flex flex-col items-center justify-center">
      <Text className="text-lg">
        Join a call
      </Text>
      <TextInput placeholder={'enter id of the facetime'} className="h-10 w-full border" />
      <Button title={'Join'} onPress={onJoin} />
    </View>
  );
};

export default JoinCall;
