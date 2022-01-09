import React, { useRef, useState } from 'react'
import styleHeader from './Header.module.scss'
import { Link } from 'react-router-dom'
import Logo from '../../atoms/Logo/Logo'
import { useAuth } from '../../../context/AuthContext'
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSignOut} from '@fortawesome/free-solid-svg-icons'

const useClickOutside = (ref: any, buttonRef: any, divRefButton: any, callback: any) => {
    const handleClick = (e: any) => {
        // console.log(buttonRef.current)
        // console.log(ref.current)
        // console.log(e.target.id)
        // console.log(e.target.classList.contains('Header_image__FxC0f') || e.target.classList.contains('Header_imageHeader__wKw85'))
        // console.log(divRefButton.current)
        if (ref.current && !(e.target.id === 'buttonProfile' || e.target.id === 'imgProfile')) {
            callback();
        }
    };
    React.useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
};

const Header = () => {
    const auth = useAuth()
    const isDevice = useMediaQuery({
        query: "(min-width: 600px)"
    });

    const [overlayProfile, setOverlayProfile] = useState(false)
    const overlayRef = useRef(null)
    const buttonRef = useRef(null)
    const divRefButton = useRef(null)
    useClickOutside(overlayRef, buttonRef, divRefButton, () => {
        console.log('overlay false')
        setOverlayProfile(false)
    })

    const image = auth?.currentUser?.photoURL === null ? 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F03%2F09%2Fdog-dating-1.jpg' : auth?.currentUser?.photoURL
    return (
        <nav className={styleHeader.navbar}>
            <div className={styleHeader.div}>
                <Logo />
                {isDevice && <p>Consulta le esperienze veterinarie e scegli le migliori cure per il tuo pet.</p>}
                {auth?.currentUser !== undefined && auth?.currentUser !== null ?
                    (
                        <>
                            <div ref={divRefButton} className={styleHeader.blockProfile}>
                                <button id='buttonProfile' ref={buttonRef} className={`${styleHeader.imageHeader} ${styleHeader.buttonProfile}`} onClick={() => setOverlayProfile(!overlayProfile)}>
                                    <img id='imgProfile' className={styleHeader.image} src={image} />
                                </button>
                                {overlayProfile &&
                                    <div className={styleHeader.overlayProfile} ref={overlayRef}>
                                        <ul>
                                            <Link to={'/vetadvisorReact/profile'}>
                                                <li>
                                                <img className={styleHeader.image} src={image} />
                                                    <p>Profilo</p>
                                                </li>
                                            </Link>
                                            <Link to={`vetadvisorReact/login`} onClick={auth.logout}>
                                                <li>
                                                    <FontAwesomeIcon icon={faSignOut} size='2x' fixedWidth></FontAwesomeIcon>
                                                    <p>Esci</p>
                                                </li>
                                            </Link>
                                            <li>...</li>
                                        </ul>
                                    </div>
                                }
                            </div>
                        </>
                    ) :
                    (
                        <li className={styleHeader.imageHeader}>
                            <Link className={`${styleHeader.loginButton}`} to={`vetadvisorReact/login`}>Accedi</Link>
                        </li>
                    )
                }
            </div>
        </nav>
    )
}

export default Header
