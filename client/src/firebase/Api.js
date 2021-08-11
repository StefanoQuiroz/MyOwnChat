import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';
import firebaseConfig from './config/fireBase';

//connect fireBase to App
const firebaseApp = firebase.initializeApp(firebaseConfig);
const DB = firebaseApp.firestore(); //manipulacion de datos

 