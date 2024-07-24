import  {initializeApp}  from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,  
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
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

 export const auth = getAuth();
 export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider)
 export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

 // to get and set data from firebseStore

 export const db = getFirestore()
export const createUserDocumentFromAuth = async(userAuth,additionalInformation = {}) =>{
   if(!userAuth) return;
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
            createdAt,
            ...additionalInformation,
        });

    }
    catch(error){
        console.log('error creating the users',error.message)

    }
}

    return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async(email,password) => {
    if(!email || !password) return;
   return await createUserWithEmailAndPassword(auth,email,password);
}





