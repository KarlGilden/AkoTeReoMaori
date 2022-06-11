import React, { useState, useContext, useEffect, FC} from 'react'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged 
} from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'
import { AuthContextType } from '../types/AuthTypes'

export const AuthContext = React.createContext();

export function useAuth(){
    const context = useContext(AuthContext)
    if (context === undefined) {
      throw new Error("useAuthContext must be within AuthProvider")
    }
    return context
}

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
            console.log(user)
        })
    })
    const signup = async (email, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        }catch (error){
            console.log(error)
        }
    }

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        }catch(error){
            return error.message
        }
     }

     const logout = async () => {
         await signOut(auth)
     }

     const value = {
        user,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
