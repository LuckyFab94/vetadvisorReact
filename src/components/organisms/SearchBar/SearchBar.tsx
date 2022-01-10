import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Button from '../../atoms/Button/Button'
import Input from '../../molecules/Input/Input'
import styleSearchBar from './SearchBar.module.scss'
import { search } from '../../../actions'

const SearchBar = () => {
    const [nome, setNome] = useState('')
    const [localita, setlocalita] = useState('')
    const isNotDevice = useMediaQuery({
        query: "(min-width: 380px)"
    });
    return (
        <>
            {isNotDevice ? (
                <div className={styleSearchBar.headerHome2}>
                    <Input label='Nome veterinario:' variable={nome} onChangeAction={(e: any) => setNome(e.target.value)} />
                    <Input label='Località:' variable={localita} onChangeAction={(e: any) => setlocalita(e.target.value)} />
                    <Button className={styleSearchBar.buttonSearch} text='Cerca' onClick={() => search({nome: nome, localita: localita})} />
                </div>
            ) : (
                <div className={styleSearchBar.headerHomeNotFlex}>
                    <Input label='Nome veterinario:' variable={nome} onChangeAction={(e: any) => setNome(e.target.value)} />
                    <Input label='Località:' variable={localita} onChangeAction={(e: any) => setlocalita(e.target.value)} />
                    <Button className={styleSearchBar.buttonSearch} text='Cerca' onClick={() => alert(nome + '' + localita)} />
                </div>
            )}
        </>
    )
}

export default SearchBar
