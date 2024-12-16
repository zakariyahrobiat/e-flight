// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9bVXzSCBPsEw6shRQlGPgCzefOb_QomQ",
  authDomain: "e-flight-a4061.firebaseapp.com",
  projectId: "e-flight-a4061",
  storageBucket: "e-flight-a4061.firebasestorage.app",
  messagingSenderId: "456962421031",
  appId: "1:456962421031:web:2c59bf8d4ff1598bf3f902",
  measurementId: "G-NMQ7HJ3E0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export {app, auth, analytics}