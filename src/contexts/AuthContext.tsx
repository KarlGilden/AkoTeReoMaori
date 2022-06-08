import React, { useState, useContext, useEffect, FC} from 'react'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged 
} from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'
import { AuthContextType } from '../types/AuthTypes'

var defaultValue:any;
export const AuthContext = React.createContext(defaultValue);

export function useAuth(){
    return useContext(AuthContext)
}

const AuthProvider: FC<any> = ({children}:any) => {
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        onAuthStateChanged(auth, (user:any) => {
            setUser(user)
            console.log(user)
        })
    })
    const signup = async (email: string, password: string) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        }catch (error){
            console.log(error)
        }
    }

    const login = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        }catch (error){
            console.log(error)
            return error
        }
     }

     const logout = async () => {
         await signOut(auth)
     }

     const value: AuthContextType = {
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
