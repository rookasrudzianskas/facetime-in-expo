import {createContext, useContext, useEffect, useState} from "react";
import {Session} from "@supabase/supabase-js";
import {supabase} from "../lib/supabase";

type AuthData = {
  session: Session | null;
  loading: boolean;
}

const AuthContext = createContext<AuthData>({session: null, loading: false});

export const AuthProvider = ({children}: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    });
    setLoading(false);
  }, []);

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

export const useAuth = () => useContext(AuthContext);
