import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
} from 'firebase/auth';

// to set and get Data From fireStore
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    
} from 'firebase/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTZDICXi1bB2c8uIKJ6KmgkrufyIEmrUo",
    authDomain: "crwn-clothing-app-9c272.firebaseapp.com",
    projectId: "crwn-clothing-app-9c272",
    storageBucket: "crwn-clothing-app-9c272.appspot.com",
    messagingSenderId: "263389251383",
    appId: "1:263389251383:web:8c4a105b52f24d601ffcb2",
  };
  


  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  // we wanna Google Authentication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

 export const auth = getAuth();
 export const signInWithGooglePopup = () => signInWithPopup(auth,provider)

// 
 export const db = getFirestore()
export const createUserDocumentFromAuth = async(userAuth) =>{
const userDocRef = doc(db, 'users', userAuth.uid)

console.log(userDocRef);

const userSnapshot = await getDoc(userDocRef);
console.log(userSnapshot)
console.log(userSnapshot.exists())


if(!userSnapshot.exists()){
    const {displayName, email} = userAuth
    const createdAt = new Date();

    try{
        await setDoc(userDocRef,{
            displayName,
            email,
            createdAt
        });

    }
    catch(error){
        console.log('error creating the users',error.message)

    }
}

    return userDocRef;

};







