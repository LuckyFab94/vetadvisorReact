import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../logo.png'

const Logo = () => {
    return (
        <Link to={'/vetadvisorReact'}>
            <img src={logo} />
        </Link>
    )
}

export default Logo
