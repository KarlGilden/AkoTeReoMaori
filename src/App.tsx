import React, { useContext } from 'react';
import './App.css';
import  AuthProvider from './contexts/AuthContext';
import Home from './pages/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Incubator from './pages/Incubator/Incubator';
import Courses from './pages/Courses/Courses';
import PrivateRoute from './components/PrivateRoute';
function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>

          <Route element={<PrivateRoute authType="user"/>}>
            <Route path="/courses" element={<Courses/>}/>
          </Route>

          <Route element={<PrivateRoute authType="admin"/>}>
            <Route path="/incubator" element={<Incubator/>}/>
          </Route>

        </Routes>
      </Router>
    </AuthProvider>
    </>

  );
}

export default App;
