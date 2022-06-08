import React, { useState } from 'react'
import FormButton from '../FormButton/FormButton'
import FormInput from '../FormInput/FormInput'
import './Login.css'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () =>{
        
  }
  return (
    <div className='vertical-form'>
        <h1>Login</h1>
        <label htmlFor="">Email:</label>
        <FormInput state={setEmail}/>
        <label htmlFor="">Password:</label>
        <FormInput state={setPassword}/>
        <FormButton onSubmit={onSubmit} text="Login"/>
    </div>
  )
}

export default Login