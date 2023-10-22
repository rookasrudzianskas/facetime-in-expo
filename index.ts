// @ts-nocheck
// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.
import { StreamChat } from "https://esm.sh/stream-chat@8.13.1"

// const serverClient = StreamChat.getInstance('r56ue2bjerbr','armbc8q8gyegkbnyfea9kx486cr56cz6had9e7bacm2t5sakcdg3xjvjfccvn4sd');
const serverClient = StreamChat.getInstance(Deno.env.get(STREAM_API_KEY), Deno.env.get(STREAM_API_SECRET));

Deno.serve(async (req) => {
  const { name } = await req.json();
  const token = serverClient.createToken(name);

  return new Response(
    JSON.stringify(token),
    { headers: { "Content-Type": "application/json" } },
  )
})

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
