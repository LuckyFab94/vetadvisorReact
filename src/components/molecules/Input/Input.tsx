import React from 'react'
import TextInput from '../../atoms/TextInput/TextInput'
import styleInput from './Input.module.scss'

const Input = ({ label, onChangeAction, variable }: any) => {
    return (
        <div style={{marginRight: '10px', width: '100%'}}>
            <div className={styleInput.inputReadOnly}>
                <label>{label}</label>
            </div>
            <TextInput className={styleInput.input} value={variable} onChange={onChangeAction} />
        </div>
    )
}

export default Input
