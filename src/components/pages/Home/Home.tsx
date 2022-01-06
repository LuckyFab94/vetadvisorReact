import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../atoms/Button/Button'
import TextInput from '../../atoms/TextInput/TextInput'
import Input from '../../molecules/Input/Input'
import SearchBar from '../../organisms/SearchBar/SearchBar'
import styleHome from './Home.module.scss'

const Home = () => {
    const [nome, setNome] = useState('')
    const [localita, setlocalita] = useState('')
    return (
        <>
            <div className={`${styleHome.headerHome1}`}>
                <Link to={'/vetadvisorReact/addVeterinario'}>Inserisci Veterinario</Link>
                <Link to={'/vetadvisorReact/forum'}>Forum</Link>
            </div>
            <SearchBar />
            <div className={styleHome.imageContent} />
        </>
    )
}

export default Home
