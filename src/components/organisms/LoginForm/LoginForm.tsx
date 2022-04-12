import { FormControl, InputBase, InputLabel } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import { BootstrapInput } from '../../atoms/BootstrapInput/BootstrapInput'
import Button from '../../atoms/Button/Button'
import styleLoginForm from './LoginForm.module.scss'

const LoginForm = () => {
    const [formData, setFormData] = useState({ nome: '', email: '', password: '' })
    const auth = useAuth()
    const [error, setError] = useState('')
    const Login = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        try {
            await auth?.login(formData.email, formData.password)
        } catch (e: any) {
            setError(e.response.data)
        }
    }

    console.log(formData)

    return (
        <form className={styleLoginForm.form} onSubmit={Login}>
            <div className={styleLoginForm.wrapperLogin}>
                <h2>Login</h2>
                {auth?.currentUser?.email}
                {error !== '' && <p className={styleLoginForm.error}>{error}</p>}
                <div className={styleLoginForm.formGroup}>
                    <FormControl style={{ display: 'flex' }} variant="standard">
                        <InputLabel shrink htmlFor="nome">
                            Nome:
                        </InputLabel>
                        <BootstrapInput id="nome" onChange={(e: any) => setFormData({ ...formData, nome: e.target.value })} />
                    </FormControl>
                </div>
                <div className={styleLoginForm.formGroup}>
                    <FormControl style={{ display: 'flex' }} variant="standard">
                        <InputLabel shrink htmlFor="email">
                            Email:
                        </InputLabel>
                        <BootstrapInput id="email" type='email' onChange={(e: any) => setFormData({ ...formData, email: e.target.value })} />
                    </FormControl>
                </div>
                <div className={styleLoginForm.formGroup}>
                    <FormControl style={{ display: 'flex' }} variant="standard">
                        <InputLabel shrink htmlFor="password">
                            Password:
                        </InputLabel>
                        <BootstrapInput id="password" type='password' onChange={(e: any) => setFormData({ ...formData, password: e.target.value })} />
                    </FormControl>
                </div>
                <Button className={styleLoginForm.buttonSubmit} type={'submit'} text={'LOGIN'} />
                <p>Non hai un account? <Link to={'/vetadvisorReact/signup'}>Registrati</Link></p>
            </div>
        </form>
    )
}

export default LoginForm
