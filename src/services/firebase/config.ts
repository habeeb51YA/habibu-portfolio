// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChEdphegP2_fa736g9YsZ54oFkqTTrPU8",
  authDomain: "habibu-s-portfolio.firebaseapp.com",
  projectId: "habibu-s-portfolio",
  storageBucket: "habibu-s-portfolio.appspot.com",
  messagingSenderId: "988554565630",
  appId: "1:988554565630:web:da6a1f9e324eff340d12af",
  measurementId: "G-SP45X1R60D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
