import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBw22CVywJ9pogJCBj-5omm8tm5TmQh0Ik",
  authDomain: "e-commerce-c2c9d.firebaseapp.com",
  projectId: "e-commerce-c2c9d",
  storageBucket: "e-commerce-c2c9d.appspot.com",
  messagingSenderId: "376352345328",
  appId: "1:376352345328:web:aa1ce11f748f206cb84635",
  measurementId: "G-NHXXHDT3R4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);