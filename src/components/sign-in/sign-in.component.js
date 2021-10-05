import React, { Component } from 'react';
import { SignInContainer, Title, ButtonsContainer } from './sign-in.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch (error) {
            console.log(error);
        }
    }
    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value});
    }

    render() {
        return (
            <SignInContainer>
                <Title>I already have an account</Title>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    handleChange={this.handleChange} 
                    name="email" 
                    type="email" 
                    value={this.state.email}
                    label="email" 
                    required />

                    <FormInput 
                    handleChange={this.handleChange} 
                    name="password" 
                    type="password" 
                    value={this.state.password}
                    label="password" 
                    required />
                    
                    <ButtonsContainer>
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                    </ButtonsContainer>
                    
                </form>
            </SignInContainer>
        );
    }
}

export default SignIn;