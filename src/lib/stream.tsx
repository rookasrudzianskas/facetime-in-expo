import {StreamVideo, StreamVideoClient, User } from '@stream-io/video-react-native-sdk';
import { PropsWithChildren } from 'react';

const apiKey = process.env.EXPO_PUBLIC_STREAM_API_KEY || '';
const userId = 'rokas';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidmFkaW0ifQ.NV_QYM9kLATmjB21QX3_ZkhHj21d8sKOil3703tBrZQ';
const user: User = { id: userId };

export const client = new StreamVideoClient({ apiKey  });

export const StreamClientProvider = ({ children }: PropsWithChildren) => {
  return <StreamVideo client={client}>{children}</StreamVideo>;
}
