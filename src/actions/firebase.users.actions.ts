import { Dispatch } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
  onAuthStateChanged,
} from "firebase/auth";
import { userAuth } from "@/lib/firebase";
import { NextResponse } from "next/server";

export async function signInToGoogle(
  setToken: Dispatch<string | undefined>
): Promise<NextResponse<{ message: string }> | NextResponse<{ error: any }>> {
  const googleProvider = new GoogleAuthProvider();
  userAuth.useDeviceLanguage();
  return await signInWithPopup(userAuth, googleProvider)
    .then((result) => {
      const userCredential = GoogleAuthProvider.credentialFromResult(result);
      const userToken = userCredential?.accessToken;
      setToken(userToken);
      return NextResponse.json({ message: "Signed In!" }, { status: 201 });
    })
    .catch((error) => {
      const errorMessage = error.message;
      const errorCode = error.code;
      return NextResponse.json({ error: errorMessage }, { status: errorCode });
    });
}

export async function signOutOfGoogle(
  setToken: Dispatch<string | undefined>
): Promise<NextResponse<{ message: string }> | NextResponse<{ error: any }>> {
  return await signOut(userAuth)
    .then(() => {
      setToken(undefined);
      return NextResponse.json({ message: "Signed Out!" }, { status: 200 });
    })
    .catch((error) => {
      const errorMessage = error.message;
      const errorCode = error.code;
      return NextResponse.json({ error: errorMessage }, { status: errorCode });
    });
}

export function onUserChange(setUser: Dispatch<User | null>): any {
  return onAuthStateChanged(userAuth, (currentUser) => {
    setUser(currentUser);
  });
}
