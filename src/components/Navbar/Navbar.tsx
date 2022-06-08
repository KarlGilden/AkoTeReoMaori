import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <h1><span className='logo-span'>Ako</span> Te Reo Maori</h1>
        </div>
        <div className="links">
            <Link className='link' to={'/'}>Home</Link>
            <Link className='link' to={'/'}>Courses</Link>
            <Link className='link' to={'/'}>Incubator</Link>
        </div>
    </div>
  )
}

export default Navbar