import "./sign-up.styles.scss";
import React, {useState } from 'react'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions"
import { connect } from "react-redux"

const SignUp = (props) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleSubmit = async e => {
        e.preventDefault();
        const { signUpStart } = props
        const {displayName, email, password, confirmPassword } = userCredentials;

        if(password !== confirmPassword){
            alert("Password don't match.")
            return;
        }

        signUpStart({ displayName, email, password })
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setUserCredentials({ ...userCredentials, [name]: value })
    }
 
        const {displayName, email, password, confirmPassword } = userCredentials
        return (
            <div className="sign-up">
                <h2 className="title">I don't have a account</h2>
                <span>Sign Up with your email and password</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} 
                        onChange={handleChange} label="Display Name" required />

                    <FormInput type="email" name="email" value={email} 
                        onChange={handleChange} label="Email" required />
                    
                    <FormInput type="password" name="password" value={password} 
                        onChange={handleChange} label="Password" required />

                    <FormInput type="password" name="confirmPassword" value={confirmPassword} 
                        onChange={handleChange} label="Confirm Password" required />
                    
                    <CustomButton type="submit">Sign Up</CustomButton>    
                </form>
            </div>
        )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)