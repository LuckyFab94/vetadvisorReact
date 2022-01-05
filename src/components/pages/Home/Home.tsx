import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../atoms/Button/Button'
import TextInput from '../../atoms/TextInput/TextInput'
import styleHome from './Home.module.scss'

const Home = () => {
    const [nome, setNome] = useState('')
    const [localita, setlocalita] = useState('')
    return (
        <>
            <div className={`${styleHome.headerHome1}`}>
                <Link to={'/addVeterinario'}>Inserisci Veterinario</Link>
                <Link to={'/forum'}>Forum</Link>
            </div>
            <div className={styleHome.headerHome2}>
                <TextInput className={styleHome.inputReadOnly} readOnly={true} value='Nome veterinario:'/>
                <TextInput className={styleHome.inputHome} value={nome} onChange={(e: any) => setNome(e.target.value)}/>
                <TextInput className={styleHome.inputReadOnly} readOnly={true} value='Località:'/>
                <TextInput className={styleHome.inputHome} value={localita} onChange={(e: any) => setlocalita(e.target.value)}/>
                <Button className={styleHome.buttonSearch} text='Cerca' onClick={()=>alert(nome+''+localita)}/>
            </div>
            <div className={styleHome.imageContent} />
        </>
    )
}

export default Home
