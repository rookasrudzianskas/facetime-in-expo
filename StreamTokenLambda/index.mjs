// Define values.
const api_key = 'r56ue2bjerbr'
const api_secret = 'armbc8q8gyegkbnyfea9kx486cr56cz6had9e7bacm2t5sakcdg3xjvjfccvn4sd'
const user_id = 'john'

// Initialize a Server Client
const serverClient = StreamChat.getInstance( api_key, api_secret);
// Create User Token
const token = serverClient.createToken(user_id);

export const handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};

console.log(await handler())
