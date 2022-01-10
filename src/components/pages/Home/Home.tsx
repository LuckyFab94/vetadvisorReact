import React, { useState } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../../atoms/Button/Button'
import TextInput from '../../atoms/TextInput/TextInput'
import Input from '../../molecules/Input/Input'
import HeaderLink from '../../organisms/HeaderLink/HeaderLink'
import SearchBar from '../../organisms/SearchBar/SearchBar'
import SearchView from '../../organisms/SearchView/SearchView'
import styleHome from './Home.module.scss'

const Home = () => {
    const [nome, setNome] = useState('')
    const [localita, setlocalita] = useState('')
    const search = useSelector((state: RootStateOrAny) => state.search)
    return (
        <>
            <HeaderLink />
            <SearchBar />
            <div className={styleHome.imageContent}>
                <SearchView search={search}/>
            </div>
        </>
    )
}

export default Home
