import "./sign-in-and-sign-up.styles.scss"
import React from 'react'
import SignIn from "../../components/sign-in/sign-in.component"
import SignUp from "../../components/sign-up/sign-up.component"

export default function SignInANDSignUpPage() {
    return (
        <div className="sign-in-and-sign-up">
           <SignIn/>
           <SignUp/>
        </div>
    )
}
