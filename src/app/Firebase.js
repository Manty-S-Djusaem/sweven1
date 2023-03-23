// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCTYebwjeiFcG3ACOMvECQySDuH_X_d_9o",
  authDomain: "sweven-love.firebaseapp.com",
  projectId: "sweven-love",
  storageBucket: "sweven-love.appspot.com",
  messagingSenderId: "593609424993",
  appId: "1:593609424993:web:d7b4b8ecead63517f9aa20",
  measurementId: "G-3GHJ2N891Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
const database = getFirestore(app);

export {auth, provider, database, providerFacebook}

