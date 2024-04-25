"use client";

import { createContext, useState, useEffect } from "react";
import {
  User,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { userAuth } from "@/lib/firebase";
import { NextResponse } from "next/server";

const AuthContext = createContext({
  user: {} as User | null,
  token: "" as string | undefined,
  signInWithGoogle: async () => {},
  logOut: async () => {},
});

function AuthContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<undefined | string>(undefined);
  const signInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    userAuth.useDeviceLanguage();
    await signInWithPopup(userAuth, googleProvider)
      .then((result) => {
        const userCredential = GoogleAuthProvider.credentialFromResult(result);
        const userToken = userCredential?.accessToken;
        setToken(userToken);
        return NextResponse.json({ message: "Signed In!" }, { status: 201 });
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errorCode = error.code;
        return NextResponse.json(
          { error: errorMessage },
          { status: errorCode }
        );
      });
  };
  const logOut = async () => {
    await signOut(userAuth)
      .then(() => {
        setToken(undefined);
        return NextResponse.json({ message: "Signed Out!" }, { status: 200 });
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errorCode = error.code;
        return NextResponse.json(
          { error: errorMessage },
          { status: errorCode }
        );
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(userAuth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, token, signInWithGoogle, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
