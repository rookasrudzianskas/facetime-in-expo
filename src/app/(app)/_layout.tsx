import {Redirect, Stack} from "expo-router";
import {useAuth} from "../../context/AuthProvider";
import {ActivityIndicator, View} from "react-native";

const AppLayout = () => {
  const {session, loading} = useAuth();
  if(loading) { return (<View className='h-screen flex items-center justify-center'><ActivityIndicator /></View>)}
  if(!session) return <Redirect href={'/auth'} />
  return <Stack />
}

export default AppLayout;
