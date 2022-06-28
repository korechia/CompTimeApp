import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { connectDatabaseEmulator} from "firebase/database";
import {setPersistence, getAuth} from "firebase/auth";

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
 apiKey: "AIzaSyCkY76GLLufJM7tBQo-8elKsCuGVnmFQcU",
  authDomain: "comptimeutility.firebaseapp.com",
  databaseURL: "https://comptimeutility-default-rtdb.firebaseio.com",
  projectId: "comptimeutility",
  storageBucket: "comptimeutility.appspot.com",
  messagingSenderId: "124036445617",
  appId: "1:124036445617:web:0ddd62d4aa94957886b990",
  measurementId: "G-41QMQ3QCQ2"
};

export const app = initializeApp(firebaseConfig);

// Get a reference to the database service
export const database = getDatabase(app);
//connectDatabaseEmulator(database, "localhost", 5000);




