import React, { useContext } from 'react'
import  { useAuth } from '../contexts/AuthContext';

const Home = () => {
    const {user} = useAuth();
  return (
    <div>{user}</div>
  )
}

export default Home