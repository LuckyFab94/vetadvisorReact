import React from 'react'
import styleHeader from './Header.module.scss'
import { Link } from 'react-router-dom'
import Logo from '../../atoms/Logo/Logo'
import { useAuth } from '../../../context/AuthContext'

const Header = () => {
    const auth = useAuth()
    console.log(auth?.currentUser)
    return (
        <nav className={styleHeader.navbar}>
            <div>
                <Logo />
                <p>Consulta le esperienze vetirinarie e scegli le migliori cure per il tuo pet.</p>
                {auth?.currentUser !== undefined &&  auth?.currentUser !== null? 
                (
                    <Link className={styleHeader.loginButton} to={`login`} onClick={auth.logout}>Esci</Link>
                ):
                (
                    <Link className={styleHeader.loginButton} to={`login`}>Accedi</Link>
                )
                }
            </div>
        </nav>
    )
}

export default Header
