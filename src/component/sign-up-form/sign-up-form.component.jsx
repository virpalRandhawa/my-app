import {useState} from 'react';   
import {
    createAuthUserWithEmailAndPassword, 
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.component';

import FormInput from '../form-input/form-input.component';

import './sign-up-form.styles.scss';
import Button from '../button/button.component';


const defaultFormField = {
    displayName : '',
    email : '',
    password : '',
    confirmPassword : '',
}

const SignUpForm = () => {
     
    const [formFields, setFormFields] = useState(defaultFormField)
    const {displayName, email, password, confirmPassword} = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormField);
    }

    const HandleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert('password did not match');
            return;
        }
        // Call Firebase function to create user

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);         

           await createUserDocumentFromAuth(user,{displayName})

           resetFormFields();

        }catch(error) {

            if(error.code === 'auth/email-already-in-use'){
                alert('cannot create user, email already in use')
            }else{
                console.log('user creation encountered error',error)
            }

            }
        
    }


    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name] : value})
    }
    
    return(
     
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign Up With Email And Password</span>
            <form onSubmit={HandleSubmit}>
            <FormInput
                label="DisplayName"                 
                type="text" 
                required 
                onChange={handleChange}  
                name='displayName' 
                value={displayName}
                />

                <FormInput   
                label="Email "               
                type="email" 
                required  
                onChange={handleChange} 
                name='email' 
                value={email}                    
                />
                
                <FormInput
                label="Password"              
                type="password"
                required  
                onChange={handleChange} 
                name='password' 
                value={password}                    
                />

                <FormInput
                label="Confirm Password "               
                type="password" 
                required  
                onChange={handleChange} 
                name='confirmPassword' 
                value={confirmPassword}                    
                />

                <Button type="submit">Sign Up</Button>

            </form>
        </div>
    )
}

export default SignUpForm;






















