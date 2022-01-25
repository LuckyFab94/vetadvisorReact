import React from 'react'
import styleButton from './Button.module.scss'
import Button from '@mui/material/Button';

const CustomButton = ({className, text, onClick, type, disabled}: any) => {
    return (
        <Button variant="contained" disabled={disabled} type={type} className={`${styleButton.button} ${className}`} onClick={onClick}>
            {text ?? 'Bottone'}
        </Button>
    )
}

export default CustomButton
