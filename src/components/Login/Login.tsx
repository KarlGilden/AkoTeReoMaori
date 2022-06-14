import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import FormButton from '../Buttons/FormButton/FormButton'
import FormInput from '../FormInput/FormInput'
import './Login.css'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [error, setError] = useState("");
  const {login} = useAuth()

  const onSubmit = async () =>{
    setEmailError("")
    setPasswordError("")
    if(email.length == 0){
      setEmailError("This is a required field")
    }
    if(password.length == 0){
      setPasswordError("This is a required field")
    }
    if(password.length > 0 && email.length > 0){
      const e = await login(email, password)
      setError(e);
    }
  }

  return (
    <div className='vertical-form'>
        <h1>Login</h1>
        <div className="input-wrapper">
          <label className={`${emailError ? "error-label" : ""}`} htmlFor="">Email:</label>
          <FormInput invalid={emailError? true : false} state={setEmail}/>
          <small className={`${passwordError ? "error-label" : ""}`}>{emailError}</small>
        </div>
        <div className="input-wrapper">
          <label className={`${passwordError ? "error-label" : ""}`} htmlFor="">Password:</label>
          <FormInput invalid={passwordError? true : false} state={setPassword}/>
          <small className={`${passwordError ? "error-label" : ""}`}>{passwordError}</small>
        </div>
        <FormButton onSubmit={onSubmit} text="Login"/>
        {error}
    </div>
  )
}

export default Login