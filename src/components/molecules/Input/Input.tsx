import React from 'react'
import TextInput from '../../atoms/TextInput/TextInput'
import styleInput from './Input.module.scss'

const Input = ({label, onChangeAction, variable}:any) => {
    return (
        <>
            <label className={styleInput.inputReadOnly}>{label}</label>
            <TextInput className={styleInput.input} value={variable} onChange={onChangeAction}/>
        </>
    )
}

export default Input
