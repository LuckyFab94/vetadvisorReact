import React from 'react'
import { Link } from 'react-router-dom'
import HeaderLink from '../../organisms/HeaderLink/HeaderLink'
import styleNewVeterinario from './AddVeterinario.module.scss'

const AddVeterinario = () => {
    return (
        <>
            <HeaderLink />
            <div className={styleNewVeterinario.containerNewVeterinario}>
                addVeterinario
            </div>
        </>
    )
}

export default AddVeterinario
