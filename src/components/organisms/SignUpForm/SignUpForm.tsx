import React, { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import Button from '../../atoms/Button/Button'
import TextInput from '../../atoms/TextInput/TextInput'
import styleSignUpForm from './SignUpForm.module.scss'

const SignUpForm = () => {
    const [formData, setFormData] = useState({email:'',password:'', confirmPassword: ''})
    const auth = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const SignUp = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        if(formData.password !== formData.confirmPassword){
            return setError('le password non sono uguali')
        }
        try{
             await auth?.signup(formData.email,formData.password)
        }catch(e: any){
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
                    <label htmlFor='email' >Email:</label>
                    <TextInput type={'email'} name='email' id='email' value={formData.email} onChange={(e: any)=>setFormData({...formData, email: e.target.value})}/>
                </div>
                <div className={styleSignUpForm.formGroup}>
                    <label htmlFor='password' >Password:</label>
                    <TextInput type={'password'} name='password' id='password' value={formData.password} onChange={(e: any)=>setFormData({...formData, password: e.target.value})}/>
                </div>
                <div className={styleSignUpForm.formGroup}>
                    <label htmlFor='confirmpassword' >Confirm Password:</label>
                    <TextInput type={'password'} name='confirmpassword' id='confirmpassword' value={formData.confirmPassword} onChange={(e: any)=>setFormData({...formData, confirmPassword: e.target.value})}/>
                </div>
                <Button disabled={loading} className={styleSignUpForm.buttonSubmit} type={'submit'} text={'SIGNUP'} />
            </div>
        </form>
    )
}

export default SignUpForm
