import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD0r6AK81F8bdXA4_eUqseRdOs5yEkP37E",
    authDomain: "udemy-vue-firebase-sites-63609.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-63609",
    storageBucket: "udemy-vue-firebase-sites-63609.appspot.com",
    messagingSenderId: "67801261022",
    appId: "1:67801261022:web:4bcaec7f06ebce691bf34f",
    measurementId: "G-3F85GH2BDB"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };