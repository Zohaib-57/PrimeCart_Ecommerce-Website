// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDp0OpQv7Bj_Pd1uD37wAVsDGEWXbGkGNE",
  authDomain: "ecommerce-store-60853.firebaseapp.com",
  databaseURL: "https://ecommerce-store-60853-default-rtdb.firebaseio.com",
  projectId: "ecommerce-store-60853",
  storageBucket: "ecommerce-store-60853.firebasestorage.app",
  messagingSenderId: "554914881199",
  appId: "1:554914881199:web:03e926d399d3346ea9be5a",
  measurementId: "G-TKWB3W8N1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }