import { FirebaseError } from 'firebase/app'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, User, UserCredential } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebase'
import axios from 'axios'

interface AppContextInterface {
    currentUser: User | null;
    signup: (email: string, password: string, name: string, surname: string) => Promise<any>;
    login: (email: string, password: string) => Promise<any>;
    logout: () => void;
}

const AuthContext = createContext<AppContextInterface | null>(null)



export const useAuth = () =>{
    return useContext(AuthContext)
}

export const AuthProvider = ({children}: any) => {

    const location = useLocation()
    console.log(location)

    let localUser = localStorage.getItem('user')
    if(localUser !== null && localUser !== ''){
        localUser = JSON.parse(localUser)
    }else {
        localUser = null
    }
    const [currentUser, setCurrentUser] = useState<any>(localUser)
    const navigate = useNavigate()

    const signup = (email: string,password: string, name: string, surname: string) => {
        /* return createUserWithEmailAndPassword(auth,email,password) */
        return axios.post('http://192.168.131.11:3001/register',{
            name: name,
            surname: surname,
            email: email,
            password: password
        }).then((resp)=>{
            setCurrentUser(resp.data[0])
            localStorage.setItem('user', JSON.stringify(resp.data[0]))
            navigate('/vetAdvisorReact')
        })
    }

    const login = (email: string,password: string) => {
        /* return signInWithEmailAndPassword(auth,email,password) */
        return axios.post('http://localhost:3001/login',{
            email: email,
            password: password
        }).then((resp)=>{
            localStorage.setItem('user', JSON.stringify(resp.data[0]))
            navigate('/vetAdvisorReact')
            setCurrentUser(resp.data[0])
        })
    }

    const logout = () =>{
        setCurrentUser(null)
        localStorage.setItem('user', '')
    }

    const checkToken = async () => {
        console.log(currentUser)
        return await axios.post('http://localhost:3001/welcome',{
            token: currentUser?.token
        })
    }

    const updateImageProfile = async (user: User,displayName: string, photoUrl: string) => {
        await updateProfile(user,{
            'displayName': displayName,
            'photoURL': photoUrl
        })
    }

    useEffect(() => {
        /* const unsubscribe = onAuthStateChanged(auth,(user: any) =>{
            console.log(user)
            setCurrentUser(user)
            if(user){
                navigate('/vetadvisorReact')
            }else{
                navigate('/vetadvisorReact/login')
            }
        })

        return unsubscribe */
        console.log(location.pathname)
        checkToken().then((resp)=>{
            if(resp.status !== 200){
                navigate('/vetadvisorReact/login')
            }else {
                navigate(location.pathname)
            }
        }).catch((err)=>{
            navigate('/vetadvisorReact/login')
        })
    }, [currentUser])

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
