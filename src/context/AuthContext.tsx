import { FirebaseError } from 'firebase/app'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User, UserCredential } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'
import {auth} from '../firebase/firebase'

interface AppContextInterface {
    currentUser: User | null;
    signup: (email: string, password: string) => Promise<UserCredential>;
    login: (email: string, password: string) => Promise<UserCredential>;
    logout: () => void;
}

const AuthContext = createContext<AppContextInterface | null>(null)



export const useAuth = () =>{
    console.log('useContext(AuthContext)')
    return useContext(AuthContext)
}

export const AuthProvider = ({children}: any) => {

    const [currentUser, setCurrentUser] = useState<User | null>(null)

    const signup = (email: string,password: string) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email: string,password: string) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = () =>{
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user: any) =>{
            console.log('user')
            console.log(user)
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])

    const value: AppContextInterface = {
        currentUser,
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
