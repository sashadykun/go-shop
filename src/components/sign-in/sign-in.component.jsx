import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: 'some@some.com',
            password: 'hannanana'
        }
    }


    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account </h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        label='email' 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        required 
                    />
                    
                    <FormInput 
                        name='password' 
                        type='password' 
                        label='password' 
                        handleChange={this.handleChange} 
                        value={this.state.password} 
                        required 
                    />
                    
                    <input type='submit' value='Submit Form' />
                </form>
            </div>
        )
    }
}

export default SignIn;