// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2wZM5ntJcCEfIf15Aj5oFRTFmad66iKI",
  authDomain: "royal-meals.firebaseapp.com",
  projectId: "royal-meals",
  storageBucket: "royal-meals.appspot.com",
  messagingSenderId: "669825346871",
  appId: "1:669825346871:web:4a60bc22f81b3854d97eb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;