 import firebase from 'firebase';
// Import the functions you need from the SDKs you need



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB428PPJwu77Vt7gnRBIk5HwtmLH4PTKMU",
  authDomain: "pro-c60-438a4.firebaseapp.com",
  projectId: "pro-c60-438a4",
  storageBucket: "pro-c60-438a4.appspot.com",
  messagingSenderId: "834269564334",
  appId: "1:834269564334:web:e2b6bb0d2d14940c0d0c3f"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

  export default firebase.database()
 

  