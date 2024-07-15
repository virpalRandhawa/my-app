import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.component";


const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        // console.log(response);
        createUserDocumentFromAuth(user);
    }
    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign In Google Pop Up
            </button>
        </div>
    )
}


export default SignIn;



