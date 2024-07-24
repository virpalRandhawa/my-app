import {useEffect} from 'react';
import { getRedirectResult } from 'firebase/auth'; 

import {
    auth, 
    signInWithGooglePopup, 
    signInWithGoogleRedirect, 
    createUserDocumentFromAuth
 } from "../../utils/firebase/firebase.component";
 

import SignUpForm from '../../component/sign-up-form/sign-up-form.component';


const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
          const userDocRef = await createUserDocumentFromAuth(user);
    };       
  
    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign In Google Pop Up
            </button>
            <SignUpForm/>
       
        </div>
    )
}


export default SignIn;



