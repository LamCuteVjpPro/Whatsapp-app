// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova"; 
import { getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI6jSV0iEqj3K8dAiDKLfSNpZCuETmBLY",
  authDomain: "whatsapp-clone-a53d1.firebaseapp.com",
  projectId: "whatsapp-clone-a53d1",
  storageBucket: "whatsapp-clone-a53d1.appspot.com",
  messagingSenderId: "621958387276",
  appId: "1:621958387276:web:34fce6379599e76cae86e9",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { db, auth, provider };

