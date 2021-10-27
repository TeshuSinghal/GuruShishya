import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBIsboIAM9wdD2R5Pgk4BsML-X2Cb4Y3R8",
  authDomain: "guru-shishya-app-568a7.firebaseapp.com",
  projectId: "guru-shishya-app-568a7",
  storageBucket: "guru-shishya-app-568a7.appspot.com",
  messagingSenderId: "796002739562",
  appId: "1:796002739562:web:85b36ff58df40e19d2b113"
};

// Initialize Firebase
  if(!firebase.apps.length){
    let app = firebase.initializeApp(firebaseConfig);
  }

  export default firebase.firestore();