// Define values.
// const api_key = 'r56ue2bjerbr'
// const api_secret = 'armbc8q8gyegkbnyfea9kx486cr56cz6had9e7bacm2t5sakcdg3xjvjfccvn4sd'
// const user_id = 'john'

import {StreamChat} from "stream-chat";

const SUPABASE_URL = process.env.SUPABASE_URL ?? '';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY ?? '';

// const STREAM_API_KEY = process.env.STREAM_API_KEY ?? '';
// const STREAM_API_SECRET = process.env.STREAM_API_SECRET ?? '';
const STREAM_API_KEY = 'r56ue2bjerbr';
const STREAM_API_SECRET = 'armbc8q8gyegkbnyfea9kx486cr56cz6had9e7bacm2t5sakcdg3xjvjfccvn4sd';

const user_id = 'john'

// Initialize a Server Client
const serverClient = StreamChat.getInstance(STREAM_API_KEY, STREAM_API_SECRET);

export const handler = async (event) => {

// Create User Token
  const token = serverClient.createToken(user_id);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      token: token,
    }),
  };
  return response;
};

console.log(await handler())
