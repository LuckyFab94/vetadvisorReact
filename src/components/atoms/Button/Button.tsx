import React from 'react'
import styleButton from './Button.module.scss'

const Button = ({className, text, onClick, type, disabled}: any) => {
    return (
        <button disabled={disabled} type={type} className={`${styleButton.button} ${className}`} onClick={onClick}>
            {text ?? 'Bottone'}
        </button>
    )
}

export default Button
