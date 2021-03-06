import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "${VAR_API}",
    authDomain: "${VAR_AUTH}",
    projectId: "${VAR_PROJECT}",
    storageBucket: "${VAR_STORAGE}",
    messagingSenderId: "${VAR_MESS}",
    appId: "${VAR_APP}"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
