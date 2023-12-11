import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCntMOAf_4wzdHbaIv0KBIx85tSHxGWzmM",
  authDomain: "prenderia-3d04d.firebaseapp.com",
  projectId: "prenderia-3d04d",
  storageBucket: "prenderia-3d04d.appspot.com",
  messagingSenderId: "646169820087",
  appId: "1:646169820087:web:2b00a6dda6b99f769e4632",
  measurementId: "G-H4H05FNQWJ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
