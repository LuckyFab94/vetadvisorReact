import React from 'react'
import { Navigate, Route, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const PrivateRoute = () => {
    const auth = useAuth()
    console.log(auth)
    return auth?.currentUser ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute
