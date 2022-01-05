import React, { useState } from 'react'
import Button from '../../atoms/Button/Button'
import Input from '../../molecules/Input/Input'
import styleSearchBar from './SearchBar.module.scss'

const SearchBar = () => {
    const [nome, setNome] = useState('')
    const [localita, setlocalita] = useState('')
    return (
        <div className={styleSearchBar.headerHome2}>
            <Input label='Nome veterinario:' variable={nome} onChangeAction={(e: any) => setNome(e.target.value)} />
            <Input label='Località:' variable={localita} onChangeAction={(e: any) => setlocalita(e.target.value)} />
            <Button className={styleSearchBar.buttonSearch} text='Cerca' onClick={() => alert(nome + '' + localita)} />
        </div>
    )
}

export default SearchBar
