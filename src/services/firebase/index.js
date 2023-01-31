import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC_oDFlFQJAIyIuh3ApEYfIRSJhnCJ8Rrg",
  authDomain: "mealstogo-1070f.firebaseapp.com",
  projectId: "mealstogo-1070f",
  storageBucket: "mealstogo-1070f.appspot.com",
  messagingSenderId: "494083322651",
  appId: "1:494083322651:web:0e7af1729ff27a1c0659be",
};

export const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
