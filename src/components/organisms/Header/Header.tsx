import React from 'react'
import styleHeader from './Header.module.scss'
import { Link } from 'react-router-dom'
import Logo from '../../atoms/Logo/Logo'

const Header = () => {
    return (
        <nav className={styleHeader.navbar}>
            <div>
                <Logo />
                <p>Consulta le esperienze vetirinarie e scegli le migliori cure per il tuo pet.</p>
                <Link className={styleHeader.loginButton} to={`login`}>Accedi</Link>
            </div>
        </nav>
    )
}

export default Header
