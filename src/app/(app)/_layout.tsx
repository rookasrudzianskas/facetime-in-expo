import {Stack} from "expo-router";
import {useAuth} from "../../context/AuthProvider";
import {ActivityIndicator, View} from "react-native";
import Account from "./account";
import Auth from "./auth";

const AppLayout = () => {
  const {session, loading} = useAuth();

  if(loading) {
    return (
      <View className='h-screen flex items-center justify-center'>
        <ActivityIndicator />
      </View>
    )
  }

  return <>
    {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
  </>
}

export default AppLayout;
