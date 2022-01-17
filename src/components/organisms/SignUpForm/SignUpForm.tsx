import { FormControl, InputLabel } from '@mui/material'
import React, { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { BootstrapInput } from '../../atoms/BootstrapInput/BootstrapInput'
import Button from '../../atoms/Button/Button'
import TextInput from '../../atoms/TextInput/TextInput'
import styleSignUpForm from './SignUpForm.module.scss'

const SignUpForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' })
    const auth = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const SignUp = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            return setError('le password non sono uguali')
        }
        try {
            await auth?.signup(formData.email, formData.password)
        } catch (e: any) {
            setError(e.code)
        }
    }

    return (
        <form className={styleSignUpForm.form} onSubmit={SignUp}>
            <div className={styleSignUpForm.wrapperSignUp}>
                <h2>SignUp</h2>
                {auth?.currentUser?.email}
                {error !== '' && <p>{error}</p>}
                <div className={styleSignUpForm.formGroup}>
                    <FormControl style={{ display: 'flex' }} variant="standard">
                        <InputLabel shrink htmlFor="email">
                            Email:
                        </InputLabel>
                        <BootstrapInput id="email" onChange={(e: any) => setFormData({ ...formData, email: e.target.value })} />
                    </FormControl>
                </div>
                <div className={styleSignUpForm.formGroup}>
                    <FormControl style={{ display: 'flex' }} variant="standard">
                        <InputLabel shrink htmlFor="password">
                            Password:
                        </InputLabel>
                        <BootstrapInput id="password" onChange={(e: any) => setFormData({ ...formData, password: e.target.value })} />
                    </FormControl>
                </div>
                <div className={styleSignUpForm.formGroup}>
                    <FormControl style={{ display: 'flex' }} variant="standard">
                        <InputLabel shrink htmlFor="confirmpassword">
                            Confirma Password:
                        </InputLabel>
                        <BootstrapInput id="confirmpassword" onChange={(e: any) => setFormData({ ...formData, confirmPassword: e.target.value })} />
                    </FormControl>
                </div>
                <Button disabled={loading} className={styleSignUpForm.buttonSubmit} type={'submit'} text={'SIGNUP'} />
            </div>
        </form>
    )
}

export default SignUpForm
