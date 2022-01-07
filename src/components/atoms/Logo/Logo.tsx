import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import logo from '../../../logo.png'

const Logo = () => {
    const auth = useAuth()
    const link = auth?.currentUser ? '/vetadvisorReact' : '/vetadvisorReact/login'
    return (
        <Link to={link}>
            <img src={logo} />
        </Link>
    )
}

export default Logo
