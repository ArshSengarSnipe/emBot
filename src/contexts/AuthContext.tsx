"use client";

import { createContext, useState, useEffect } from "react";
import { User } from "firebase/auth";
import {
  signInToGoogle,
  signOutOfGoogle,
  onUserChange,
} from "@/actions/firebase.users.actions";

const AuthContext = createContext({
  user: {} as User | null,
  token: "" as string | undefined,
  signInWithGoogle: () => Promise.resolve(),
  logOut: () => Promise.resolve(),
});

function AuthContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | undefined>(undefined);
  const signInWithGoogle = async () => {
    await signInToGoogle(setToken);
  };
  const logOut = async () => {
    await signOutOfGoogle(setToken);
  };
  useEffect(() => {
    const unsubscribe = onUserChange(setUser);
    return () => unsubscribe();
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, token, signInWithGoogle, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
