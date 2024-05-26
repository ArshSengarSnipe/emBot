import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:
    process.env.FIREBASE_API_KEY ?? "AIzaSyAasw-K4jScBYRNuW0DjKp8SbupiatlPsk",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN ?? "embot-snipe.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID ?? "embot-snipe",
  storageBucket:
    process.env.FIREBASE_STORAGE_BUCKET ?? "embot-snipe.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID ?? "484633762306",
  appId:
    process.env.FIREBASE_APP_ID ?? "1:484633762306:web:0fe4df892103729280251b",
  measurementId: process.env.FIREBASE_MEASUREMENT_ID ?? "G-SWWHPXB0YM",
};
const emBotApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const userAuth = getAuth(emBotApp);

export { userAuth };
