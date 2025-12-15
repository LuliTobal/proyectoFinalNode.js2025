import { configDotenv } from "dotenv";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

configDotenv();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "productosfinalnode2025",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "41669381054",
  appId: process.env.FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app); 

export { db };
