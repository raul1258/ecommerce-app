// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnL6iX3w1EkGawt9x30UzW4h7vq1DRZT4",
  authDomain: "ecommerce-562f5.firebaseapp.com",
  projectId: "ecommerce-562f5",
  storageBucket: "ecommerce-562f5.appspot.com",
  messagingSenderId: "735392960710",
  appId: "1:735392960710:web:00379603fb7f603cd047c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


