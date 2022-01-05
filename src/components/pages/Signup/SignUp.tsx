import React from 'react'
import SignUpForm from '../../organisms/SignUpForm/SignUpForm'
import styleSignUp from './SignUp.module.scss'

const SignUp = () => {
    return (
        <div className={styleSignUp.containerSignUp}>
            <SignUpForm />
        </div>
    )
}

export default SignUp
