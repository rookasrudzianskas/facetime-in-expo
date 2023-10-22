import {StreamVideoClient, User} from "@stream-io/video-react-native-sdk";
import {useState} from "react";

const apiKey = process.env.EXPO_PUBLIC_STREAM_API_KEY!;
const userId = 'rokas';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicm9rYXMifQ.wC88UAO34NQFOXCxSMS7fuqdip_38kDoM9a18Wx9q7k';
const callId = 'default_cfac32cf-afb2-49ab-ad78-655c2604da5d';
const user: User = { id: userId };

export const [client] = useState(
  () => new StreamVideoClient({ apiKey, user, token }),
);
