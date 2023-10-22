import {createContext} from "react";
import {Session} from "@supabase/supabase-js";

type AuthData = {
  session: Session | null;
  loading: boolean;
}

const AuthContext = createContext<AuthData>({session: null, loading: false});

export const AuthProvider = ({children}: { children: React.ReactNode }) => {
  return (
    <AuthContext.Provider value={{session: null, loading: false}}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;
