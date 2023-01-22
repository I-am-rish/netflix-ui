import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTEKyvz6nANBDfvuvi8h8CrLbA7BqS-ug",
  authDomain: "react-netflix-clone-d9693.firebaseapp.com",
  projectId: "react-netflix-clone-d9693",
  storageBucket: "react-netflix-clone-d9693.appspot.com",
  messagingSenderId: "576228057945",
  appId: "1:576228057945:web:041f1eca0d0eedbf62e248",
  measurementId: "G-C3W00071QX",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
