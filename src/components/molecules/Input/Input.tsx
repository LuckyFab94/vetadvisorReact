import React from 'react'
import TextInput from '../../atoms/TextInput/TextInput'
import styleInput from './Input.module.scss'

const Input = ({label, onChangeAction, variable}:any) => {
    return (
        <>
            <TextInput className={styleInput.inputReadOnly} readOnly={true} value={label}/>
            <TextInput className={styleInput.input} value={variable} onChange={onChangeAction}/>
        </>
    )
}

export default Input
