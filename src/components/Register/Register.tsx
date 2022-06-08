import React, { useState } from 'react'
import FormButton from '../FormButton/FormButton'
import FormInput from '../FormInput/FormInput'
import { useAuth } from '../../contexts/AuthContext'
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {signup} = useAuth();
    const onSubmit = () =>{
        signup(email, password);
    }
  return (
    <div className='vertical-form'>
    <h1>Register</h1>
    <label htmlFor="">Email:</label>
    <FormInput state={setEmail}/>
    <label htmlFor="">Password:</label>
    <FormInput state={setPassword}/>
    <FormButton onSubmit={onSubmit} text="Register"/>
</div>
  )
}

export default Register