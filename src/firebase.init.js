// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMT7xe5fUgZ74Q5tjtvk4fyBYIqMQ3iUY",
  authDomain: "ema-john-auth-n-private-route.firebaseapp.com",
  projectId: "ema-john-auth-n-private-route",
  storageBucket: "ema-john-auth-n-private-route.appspot.com",
  messagingSenderId: "778551428830",
  appId: "1:778551428830:web:9f4eb2b5c33f56857ee44f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth