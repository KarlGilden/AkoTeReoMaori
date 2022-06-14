import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import {HiMenuAlt2} from 'react-icons/hi'
import {IoClose} from 'react-icons/io5'
const Navbar = () => {
    const {user, logout} = useAuth()
    const [showMenu, setShowMenu] = useState(false)

    const handleLogout = () => {
        logout()
    }

  return (
    <div className='navbar'>
        <div className={`mobile-menu ${showMenu ? "open-menu": ""}`}>
            <div className="mobile-links">
                <div className="mobile-left-nav">
                    {user ?
                    <>
                        <Link onClick={()=>{setShowMenu(!showMenu)}} className='mobile-link' to={'/courses'}>Courses</Link>
                        <Link onClick={()=>{setShowMenu(!showMenu)}} className='mobile-link' to={'/incubator'}>Incubator</Link>
                    </>
                    : 
                    <>
                        <Link onClick={()=>{setShowMenu(!showMenu)}} className='mobile-link' to={'/'}>Home</Link>
                        <Link onClick={()=>{setShowMenu(!showMenu)}} className='mobile-link' to={'/courses'}>About</Link>
                        <Link onClick={()=>{setShowMenu(!showMenu)}} className='mobile-link' to={'/incubator'}>Get involved</Link>
                    </>
                    }
                    
                </div>
                <div className="mobile-right-nav">
                    {user ? 
                    <Link onClick={logout} className='mobile-link' to={'/'}>Logout</Link>
                    :
                    <>
                        <Link onClick={()=>{setShowMenu(!showMenu)}} className='mobile-link' to={'/register'}>Register</Link>
                        <Link onClick={()=>{setShowMenu(!showMenu)}} className='mobile-link' to={'/login'}>Login</Link>
                    </>
                    }

                </div>
            </div>
        </div>
        <div className="logo">
            {showMenu ? 
                <IoClose onClick={()=>{setShowMenu(!showMenu)}} className='menu-icon'/>
                :
                <HiMenuAlt2 onClick={()=>{setShowMenu(!showMenu)}} className='menu-icon'/>
                }
            
            <h1><span className='logo-span'>Ako</span> Te Reo Maori</h1>
            <div className="left-nav links">
                {user ?
                <>
                    <Link className='link' to={'/courses'}>Courses</Link>
                    <Link className='link' to={'/incubator'}>Incubator</Link>
                </>
                : 
                <>
                    <Link className='link' to={'/'}>Home</Link>
                    <Link className='link' to={'/courses'}>About</Link>
                    <Link className='link' to={'/incubator'}>Get involved</Link>
                </>
                }
                
            </div>
        </div>
            <div className="right-nav links">
                {user ? 
                <Link onClick={logout} className='link' to={'/'}>Logout</Link>
                :
                <>
                    <Link className='link' to={'/register'}>Register</Link>
                    <Link className='link' to={'/login'}>Login</Link>
                </>
                }

        </div>
    </div>
  )
}

export default Navbar