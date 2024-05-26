import { Dispatch } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
  onAuthStateChanged,
} from "firebase/auth";
import { userAuth } from "@/lib/firebase";
// import { connectToDb } from "@/lib/mongoose";
// import { User as UserModel } from "@/models/user.model";
import { NextResponse } from "next/server";

export async function signInToGoogle(): Promise<
  NextResponse<{ message: string }> | NextResponse<{ error: any }>
> {
  const googleProvider = new GoogleAuthProvider();
  userAuth.useDeviceLanguage();
  return await signInWithPopup(userAuth, googleProvider)
    .then(async (result) => {
      const user = result.user;
      let greeting: string = "Welcome!";
      // if (user) {
      //   await connectToDb();
      //   const emailId = user.email;
      //   const oldUser = await UserModel.findOne({ emailId });
      //   if (oldUser) {
      //     greeting = "Welcome back!";
      //   } else {
      //     const newUser = new UserModel({
      //       username: user.displayName,
      //       emailId,
      //     });
      //     const saved = await newUser.save();
      //     if (saved) {
      //       console.log("Saved new User!");
      //     } else {
      //       console.log("Failed to save new User!");
      //     }
      //   }
      // } else {
      //   console.log("Failed to fetch User!");
      // }
      return NextResponse.json(
        { message: `${greeting} You have Signed In!` },
        { status: 201 }
      );
    })
    .catch((error) => {
      const errorMessage = error.message;
      const errorCode = error.code;
      return NextResponse.json({ error: errorMessage }, { status: errorCode });
    });
}

export async function signOutOfGoogle(): Promise<
  NextResponse<{ message: string }> | NextResponse<{ error: any }>
> {
  return await signOut(userAuth)
    .then(() => {
      return NextResponse.json(
        { message: "Goodbye! You have Signed Out!" },
        { status: 200 }
      );
    })
    .catch((error) => {
      const errorMessage = error.message;
      const errorCode = error.code;
      return NextResponse.json({ error: errorMessage }, { status: errorCode });
    });
}

export function onUserChange(setUser: Dispatch<User | null>): () => void {
  return onAuthStateChanged(userAuth, (currentUser) => {
    setUser(currentUser);
  });
}
