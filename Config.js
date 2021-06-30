import * as firebase from 'firebase';
require('@firebase/firestore');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAwszRcR9RKm-vBPVmi1MjSE48XUdWNfyM",
  authDomain: "finifi-aac6d.firebaseapp.com",
  projectId: "finifi-aac6d",
  storageBucket: "finifi-aac6d.appspot.com",
  messagingSenderId: "413149097471",
  appId: "1:413149097471:web:57fdbcd096b9a0dd5fcbca"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();