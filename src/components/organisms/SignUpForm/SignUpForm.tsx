import { FormControl, InputLabel } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import { BootstrapInput } from '../../atoms/BootstrapInput/BootstrapInput'
import Button from '../../atoms/Button/Button'
import TextInput from '../../atoms/TextInput/TextInput'
import styleSignUpForm from './SignUpForm.module.scss'

const SignUpForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '', name: '', surname: '' })
    const auth = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const SignUp = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            return setError('le password non sono uguali')
        }
        try {
            await auth?.signup(formData.email, formData.password, formData.name, formData.surname)
        } catch (e: any) {
            setError(e.response.data)
        }
    }

    return (
        <form className={styleSignUpForm.form} onSubmit={SignUp}>
            <div className={styleSignUpForm.wrapperSignUp}>
                <h2>SignUp</h2>
                {auth?.currentUser?.email}
                {error !== '' && <p className={styleSignUpForm.error}>{error}</p>}
                <div className={styleSignUpForm.formGroup}>
                    <FormControl style={{ display: 'flex' }} variant="standard">
                        <InputLabel shrink htmlFor="name">
                            Name:
                        </InputLabel>
                        <BootstrapInput id="name" type='text' onChange={(e: any) => setFormData({ ...formData, name: e.target.value })} />
                    </FormControl>
                </div>
                <div className={styleSignUpForm.formGroup}>
                    <FormControl style={{ display: 'flex' }} variant="standard">
                        <InputLabel shrink htmlFor="surname">
                            Surname:
                        </InputLabel>
                        <BootstrapInput id="surname" type='text' onChange={(e: any) => setFormData({ ...formData, surname: e.target.value })} />
                    </FormControl>
                </div>
                <div className={styleSignUpForm.formGroup}>
                    <FormControl style={{ display: 'flex' }} variant="standard">
                        <InputLabel shrink htmlFor="email">
                            Email:
                        </InputLabel>
                        <BootstrapInput id="email" type='email' onChange={(e: any) => setFormData({ ...formData, email: e.target.value })} />
                    </FormControl>
                </div>
                <div className={styleSignUpForm.formGroup}>
                    <FormControl style={{ display: 'flex' }} variant="standard">
                        <InputLabel shrink htmlFor="password">
                            Password:
                        </InputLabel>
                        <BootstrapInput id="password" type='password' onChange={(e: any) => setFormData({ ...formData, password: e.target.value })} />
                    </FormControl>
                </div>
                <div className={styleSignUpForm.formGroup}>
                    <FormControl style={{ display: 'flex' }} variant="standard">
                        <InputLabel shrink htmlFor="confirmpassword">
                            Confirma Password:
                        </InputLabel>
                        <BootstrapInput id="confirmpassword" type='password' onChange={(e: any) => setFormData({ ...formData, confirmPassword: e.target.value })} />
                    </FormControl>
                </div>
                <Button disabled={loading} className={styleSignUpForm.buttonSubmit} type={'submit'} text={'SIGNUP'} />
                <p>Hai già un account? <Link to={'/vetadvisorReact/login'}>Accedi</Link></p>
            </div>
        </form>
    )
}

export default SignUpForm
