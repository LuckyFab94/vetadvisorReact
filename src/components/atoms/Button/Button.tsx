import React from 'react'
import styleButton from './Button.module.scss'

const Button = ({className, text, onClick}: any) => {
    return (
        <button className={`${styleButton.button} ${className}`} onClick={onClick}>
            {text ?? 'Bottone'}
        </button>
    )
}

export default Button
