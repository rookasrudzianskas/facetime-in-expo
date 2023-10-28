import {StreamChat} from "stream-chat";
import {createClient} from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL ?? '';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY ?? '';

const STREAM_API_KEY = process.env.STREAM_API_KEY ?? '';
const STREAM_API_SECRET = process.env.STREAM_API_SECRET ?? '';

const user_id = 'john'

// Initialize a Server Client
const serverClient = StreamChat.getInstance(STREAM_API_KEY, STREAM_API_SECRET);

export const handler = async (event) => {
  const authToken = event.queryStringParameters?.token;

  if(!authToken) return new Error({
    statusCode: 401,
    body: JSON.stringify({
      error: 'Unauthorized data',
    }),
  });

  try {
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY,
      { global: { headers: { Authorization: `Bearer ${authToken}` } } }
    )

    const { data: user } = await supabaseClient.auth.getUser();

    if(!user) return new Error({
      statusCode: 401,
      body: JSON.stringify({
        error: 'Unauthorized',
      }),
    });

    // Create User Token
    const token = serverClient.createToken(user.id);

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        token: token,
      }),
    };
    return response;
  } catch (e) {
    console.error(e);
    return new Error({
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal Server Error',
      }),
    });
  }
};
