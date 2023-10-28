import {StreamVideo, StreamVideoClient, User } from '@stream-io/video-react-native-sdk';
import {PropsWithChildren, useEffect} from 'react';
import {useAuth} from "../context/AuthProvider";

const apiKey = process.env.EXPO_PUBLIC_STREAM_API_KEY || '';
const LAMBDA_URL = 'https://jccwdukwfiohnkotclpdzjskm40kmpbz.lambda-url.us-east-1.on.aws'
const userId = 'rokas';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidmFkaW0ifQ.NV_QYM9kLATmjB21QX3_ZkhHj21d8sKOil3703tBrZQ';
const user: User = { id: userId };

export const client = new StreamVideoClient({ apiKey  });

export const StreamClientProvider = ({ children }: PropsWithChildren) => {
  const {session} = useAuth();

  useEffect(() => {
    if(!session?.access_token) return;
    const fetchToken = async () => {
      const result = await fetch(
        `${LAMBDA_URL}/?token=${session?.access_token}`
      )
    }
    fetchToken();
  }, [session?.access_token]);

  return <StreamVideo client={client}>{children}</StreamVideo>;
}
