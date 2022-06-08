import React, { useContext } from 'react';
import './App.css';
import  AuthProvider from './contexts/AuthContext';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </AuthProvider>
    </>

  );
}

export default App;
