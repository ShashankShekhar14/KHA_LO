import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuo6pyw-4kScXZOqTNblufYNsUk6IFkoU",
  authDomain: "goggol.firebaseapp.com",
  projectId: "goggol",
  storageBucket: "goggol.appspot.com",
  messagingSenderId: "627575724553",
  appId: "1:627575724553:web:62403e9ae11df30fea76d8"
};

const app = initializeApp(firebaseConfig); 
export const db =getFirestore(app);
export const auth = getAuth(app); 