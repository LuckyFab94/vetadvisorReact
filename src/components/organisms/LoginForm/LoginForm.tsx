import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import Button from '../../atoms/Button/Button'
import TextInput from '../../atoms/TextInput/TextInput'
import styleLoginForm from './LoginForm.module.scss'

const LoginForm = () => {
    const [formData, setFormData] = useState({nome:'',email:'',password:''})
    const auth = useAuth()
    const [error, setError] = useState('')
    const Login = async(e: React.SyntheticEvent) => {
        e.preventDefault()
        try{
            await auth?.login(formData.email,formData.password)
       }catch(e: any){
           setError(e.code)
       }
    }

    return (
        <form className={styleLoginForm.form} onSubmit={Login}>
            <div className={styleLoginForm.wrapperLogin}>
                <h2>Login</h2>
                {auth?.currentUser?.email}
                {error !== '' && <p>{error}</p>}
                <div className={styleLoginForm.formGroup}>
                    <label htmlFor='nome' >Nome:</label>
                    <TextInput type={'text'} name='nome' id='nome' value={formData.nome} onChange={(e: any)=>setFormData({...formData, nome: e.target.value})}/>
                </div>
                <div className={styleLoginForm.formGroup}>
                    <label htmlFor='email' >Email:</label>
                    <TextInput type={'email'} name='email' id='email' value={formData.email} onChange={(e: any)=>setFormData({...formData, email: e.target.value})}/>
                </div>
                <div className={styleLoginForm.formGroup}>
                    <label htmlFor='password' >Password:</label>
                    <TextInput type={'password'} name='password' id='password' value={formData.password} onChange={(e: any)=>setFormData({...formData, password: e.target.value})}/>
                </div>
                <Button className={styleLoginForm.buttonSubmit} type={'submit'} text={'LOGIN'} />
                <p>Non hai un account? <Link to={'/signup'}>Registrati</Link></p>
            </div>
        </form>
    )
}

export default LoginForm
