import { FirebaseError } from 'firebase/app'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, User, UserCredential } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebase'

interface AppContextInterface {
    currentUser: User | null;
    signup: (email: string, password: string) => Promise<UserCredential>;
    login: (email: string, password: string) => Promise<UserCredential>;
    logout: () => void;
}

const AuthContext = createContext<AppContextInterface | null>(null)



export const useAuth = () =>{
    return useContext(AuthContext)
}

export const AuthProvider = ({children}: any) => {

    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const navigate = useNavigate()

    const signup = (email: string,password: string) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email: string,password: string) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = () =>{
        signOut(auth)
    }

    const updateImageProfile = async (user: User,displayName: string, photoUrl: string) => {
        await updateProfile(user,{
            'displayName': displayName,
            'photoURL': photoUrl
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user: any) =>{
            console.log(user)
            setCurrentUser(user)
            if(user){
                navigate('/vetadvisorReact')
            }else{
                navigate('/vetadvisorReact/login')
            }
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
