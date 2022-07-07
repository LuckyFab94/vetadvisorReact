import React, { useRef, useState } from 'react'
import styleHeader from './Header.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../atoms/Logo/Logo'
import { useAuth } from '../../../context/AuthContext'
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material'
import { Logout, PersonAdd, Settings } from '@mui/icons-material'

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
    const navigate = useNavigate()
    const isDevice = useMediaQuery({
        query: "(min-width: 600px)"
    });

    const [overlayProfile, setOverlayProfile] = useState(null)
    const open = Boolean(overlayProfile);
  const handleClick = (event: any) => {
    setOverlayProfile(event.currentTarget);
  };
  const handleClose = () => {
    setOverlayProfile(null);
  };

  const goToProfile = () => {
    navigate('/vetadvisorReact/profile')
  }

    const image = !auth?.currentUser?.photoURL ? 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F03%2F09%2Fdog-dating-1.jpg' : auth?.currentUser?.photoURL
    return (
        <nav className={styleHeader.navbar}>
            <div className={styleHeader.div}>
                <Logo />
                {isDevice && <p>Consulta le esperienze veterinarie e scegli le migliori cure per il tuo pet.</p>}
                {auth?.currentUser !== undefined && auth?.currentUser !== null ?
                    (
                        <>
                            <div className={styleHeader.blockProfile}>
                                <Tooltip title="Account settings">
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        sx={{ ml: 2 }}
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                    >
                                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    anchorEl={overlayProfile}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&:before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={goToProfile}>
                                        <Avatar /> Profile
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        Add another account
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Settings fontSize="small" />
                                        </ListItemIcon>
                                        Settings
                                    </MenuItem>
                                    <MenuItem onClick={auth.logout}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
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
