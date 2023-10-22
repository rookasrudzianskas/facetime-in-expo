import {createContext, useState} from "react";
import {Session} from "@supabase/supabase-js";

type AuthData = {
  session: Session | null;
  loading: boolean;
}

const AuthContext = createContext<AuthData>({session: null, loading: false});

export const AuthProvider = ({children}: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{
        session,
        loading: false
      }}
    >
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;
