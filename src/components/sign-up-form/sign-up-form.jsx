import { confirmPasswordReset } from 'firebase/auth';
import { useState } from 'react';
import FormInput from '../form-input/form-input';
import Button from '../button/button'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';
import './sign-up-form.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            console.log({displayName});
            await createUserDocumentFromAuth(user, { displayName } );
            resetFormFields();
        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Email already in use');
            } else {
            console.log('user creation encountered an error', error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className='sign-up-container'>
            <span>Sign up with your email and password</span>
            <h2>Don't have an account?</h2>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    type='text'
                    onChange={handleChange}
                    name='displayName'
                    value={displayName}  />

                <FormInput
                    label='email'
                    type='email'
                    onChange={handleChange}
                    name='email'
                    value={email}  />

                <FormInput
                    label='Password'
                    type='password'
                    onChange={handleChange}
                    name='password'
                    value={password}  />

                <FormInput
                    label='Confirm Password'
                    type='password'
                    onChange={handleChange}
                    name='confirmPassword'
                    value={confirmPassword}  />

                
                
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;