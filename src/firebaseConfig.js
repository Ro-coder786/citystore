// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPsM1ub4oI8X_VKIGsnfLZ9cAxM5b3C3Y",
    authDomain: "citystore-e1d50.firebaseapp.com",
    projectId: "citystore-e1d50",
    storageBucket: "citystore-e1d50.firebasestorage.app",
    messagingSenderId: "627506985628",
    appId: "1:627506985628:web:6428d53d3f89c6fa5ecb59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
//const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth(app)

export { app, auth }