import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "sutairu-5db7f",
  storageBucket: "sutairu-5db7f.appspot.com",
  messagingSenderId: "352761845983",
  appId: "1:352761845983:web:f7fa1ce0b6161b301af16a",
  measurementId: "G-N58Z0PPVY9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
