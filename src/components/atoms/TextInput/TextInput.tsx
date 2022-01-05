import React from 'react'
import styleInput from './TextInput.module.scss'

const TextInput = ({placeholder,className, readOnly, value='', onChange} : any) => {
    return (
        <input onChange={onChange} readOnly={readOnly} size={value?.length-2} value={value} placeholder={placeholder} className={`${styleInput.input} ${className}`}/>
    )
}

export default TextInput
