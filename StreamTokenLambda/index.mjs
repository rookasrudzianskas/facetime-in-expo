import {StreamChat} from "stream-chat";
import {createClient} from "@supabase/supabase-js";

// const SUPABASE_URL = process.env.SUPABASE_URL ?? '';
// const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY ?? '';
const SUPABASE_URL = 'https://izhyhtedfukdnoruqdza.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6aHlodGVkZnVrZG5vcnVxZHphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5NjQ5NDgsImV4cCI6MjAxMzU0MDk0OH0.uQ23QDfJHV0K5f5s0wVaf2o7K_EioAPCHb5JNB0RUF8';

// const STREAM_API_KEY = process.env.STREAM_API_KEY ?? '';
// const STREAM_API_SECRET = process.env.STREAM_API_SECRET ?? '';
const STREAM_API_KEY = 'r56ue2bjerbr';
const STREAM_API_SECRET = 'armbc8q8gyegkbnyfea9kx486cr56cz6had9e7bacm2t5sakcdg3xjvjfccvn4sd';

const user_id = 'john'

// Initialize a Server Client
const serverClient = StreamChat.getInstance(STREAM_API_KEY, STREAM_API_SECRET);

export const handler = async (event) => {
  const authToken = event.queryStringParameters?.token;

  const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY,
    { global: { headers: { Authorization: `Bearer ${authToken}` } } }
  )

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
