import React from 'react'
import { Link } from 'react-router-dom'
import styleHeaderLink from './HeaderLink.module.scss'

const HeaderLink = () => {
    return (
        <div className={`${styleHeaderLink.headerHome1}`}>
            <Link to={'/vetadvisorReact/addVeterinario'}>Inserisci Veterinario</Link>
            <Link to={'/vetadvisorReact/forum'}>Forum</Link>
        </div>
    )
}

export default HeaderLink
