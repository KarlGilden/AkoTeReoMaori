import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import NotAllowedPage from '../pages/NotAllowedPage/NotAllowedPage'
import {Outlet, Navigate} from 'react-router-dom'

const PrivateRoute = (props) => {
    const { user, authLoading } = useAuth()
    const [isAuthorized, setIsAuthorized] = useState(null)

    // const isAdmin = async () =>{
    //     setLoading(true)
    //     await fetch('https://localhost:44313/auth/isAdmin', {
    //         method: "POST",
    //         headers: {
    //           'Authorization': `Bearer ${user.accessToken}`,
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //           "id": user.uid
    //         })
    //       })
    //       .then(response => {
    //         console.log(response.status)

    //           if(response.status == 200){
    //             setIsAuthorized(true)
    //           }else{
    //             setIsAuthorized(false)
    //           }
    //       })
    //       setLoading(false)
    // }
  return (
    <>

      {user && <Outlet/>}
      {user == undefined && "Loading..."}
      {user == null && user != undefined &&  <Navigate to="/login"/>}

    </>


  )
}

export default PrivateRoute