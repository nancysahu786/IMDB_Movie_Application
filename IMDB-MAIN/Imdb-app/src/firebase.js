// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBitAzH-A__V_iWU09YA1qWS3Njxrh799Q",
  authDomain: "imdb-project-8088c.firebaseapp.com",
  projectId: "imdb-project-8088c",
  storageBucket: "imdb-project-8088c.firebasestorage.app",
  messagingSenderId: "518258817033",
  appId: "1:518258817033:web:bb36e02ac82bc7524260d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
