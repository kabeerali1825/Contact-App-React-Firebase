// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6YrjuUUkBHw1Ktsa0EFXM9hkvv3AB070",
  authDomain: "contact-app-89c5c.firebaseapp.com",
  databaseURL: "https://contact-app-89c5c-default-rtdb.firebaseio.com",
  projectId: "contact-app-89c5c",
  storageBucket: "contact-app-89c5c.appspot.com",
  messagingSenderId: "115255276607",
  appId: "1:115255276607:web:f7b7f2103cd3c2ed5b348a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };