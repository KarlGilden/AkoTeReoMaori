import React, { useState } from 'react'
import FormButton from '../FormButton/FormButton'
import FormInput from '../FormInput/FormInput'
import { useAuth } from '../../contexts/AuthContext'
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const {signup} = useAuth();
    const onSubmit = () =>{
        setEmailError("")
        setPasswordError("")
        if(email.length == 0){
            setEmailError("This is a required field")
        }
        if(password.length == 0){
            setPasswordError("This is a required field")
        }
        if(password.length > 0 && email.length > 0){
            signup(email, password);
        }
    }
  return (
    <div className='vertical-form'>
    <h1>Register</h1>
    <div className="input-wrapper">
        <label className={`${emailError ? "error-label" : ""}`} htmlFor="">Email:</label>
        <FormInput invalid={emailError? true : false} state={setEmail}/>
        <small className={`${emailError ? "error-label" : ""}`}>{passwordError}</small>
    </div>
    <div className="input-wrapper">
        <label className={`${emailError ? "error-label" : ""}`} htmlFor="">Password:</label>
        <FormInput invalid={passwordError? true : false} state={setPassword}/>
        <small className={`${passwordError ? "error-label" : ""}`}>{passwordError}</small>
    </div>
    <FormButton onSubmit={onSubmit} text="Register"/>
</div>
  )
}

export default Register