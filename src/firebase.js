import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCIHuMcZjqJR7moRPM6flaumqRhND4yFoM",
  authDomain: "abhi-shop-8e119.firebaseapp.com",
  projectId: "abhi-shop-8e119",
  storageBucket: "abhi-shop-8e119.appspot.com",
  messagingSenderId: "264008042203",
  appId: "1:264008042203:web:1c54944d1da3d3efa9eefe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
