import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCS9YMLpMEsCAc5A6Dz_H-pLBUVPpL3yFs",
    authDomain: "fir-tutorial-9441e.firebaseapp.com",
    projectId: "fir-tutorial-9441e",
    storageBucket: "fir-tutorial-9441e.appspot.com",
    messagingSenderId: "80547559139",
    appId: "1:80547559139:web:c6364cd67cc9fa554137d6",
    measurementId: "G-Y2K643S1NX"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);