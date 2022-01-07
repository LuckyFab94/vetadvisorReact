import React from 'react'
import styleHeader from './Header.module.scss'
import { Link } from 'react-router-dom'
import Logo from '../../atoms/Logo/Logo'
import { useAuth } from '../../../context/AuthContext'
import { useMediaQuery } from 'react-responsive'

const Header = () => {
    const auth = useAuth()
    const isDevice = useMediaQuery({
        query: "(min-width: 600px)"
    });

    const image = auth?.currentUser?.photoURL === null ? 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F03%2F09%2Fdog-dating-1.jpg' : auth?.currentUser?.photoURL
    return (
        <nav className={styleHeader.navbar}>
            <div>
                <Logo />
                {isDevice && <p>Consulta le esperienze vetirinarie e scegli le migliori cure per il tuo pet.</p>}
                {auth?.currentUser !== undefined && auth?.currentUser !== null ?
                    (
                        <>
                            <img className={styleHeader.imageHeader} style={{width: '50px', borderRadius: '100%'}} src={image} />
                            <Link className={styleHeader.loginButton} to={`vetadvisorReact/login`} onClick={auth.logout}>Esci</Link>
                        </>
                    ) :
                    (
                        <Link className={`${styleHeader.loginButton} ${styleHeader.imageHeader}`} to={`vetadvisorReact/login`}>Accedi</Link>
                    )
                }
            </div>
        </nav>
    )
}

export default Header
