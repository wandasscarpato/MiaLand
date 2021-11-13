// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArJ1EwoExvqxkWXI6M7j_KPxc4DvXY36E",
  authDomain: "mialand-cef72.firebaseapp.com",
  projectId: "mialand-cef72",
  storageBucket: "mialand-cef72.appspot.com",
  messagingSenderId: "270085712889",
  appId: "1:270085712889:web:495d96847c56d193dbab28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
