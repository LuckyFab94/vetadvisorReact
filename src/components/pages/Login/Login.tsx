import React from 'react'
import LoginForm from '../../organisms/LoginForm/LoginForm'
import styleLogin from './Login.module.scss'

const Login = () => {
    return (
        <div className={styleLogin.containerLogin}>
            <LoginForm />
        </div>
    )
}

export default Login
