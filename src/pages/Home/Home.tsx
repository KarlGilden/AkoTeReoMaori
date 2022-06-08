import React, { useContext } from 'react'
import Login from '../../components/Login/Login';
import  { useAuth } from '../../contexts/AuthContext';
import './Home.css'
const Home = () => {
    const {user} = useAuth();
  return (
    <div className='page'>{user}</div>
  )
}

export default Home