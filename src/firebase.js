import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAH8p1U-yzEAtylu_Uz6w82NTixpvabhIo",
    authDomain: "live-messager.firebaseapp.com",
    databaseURL: "https://live-messager.firebaseio.com",
    projectId: "live-messager",
    storageBucket: "live-messager.appspot.com",
    messagingSenderId: "706208659477",
    appId: "1:706208659477:web:0eb84d88d79b44398f361c",
    measurementId: "G-VRGGN5VBVG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider}; 
export default db;