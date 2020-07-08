// import "./custom-button.styles.scss"
import React from 'react'
import { CustomButtonContainer } from "./custom-button.styles"

export default function CustomButton({ children, ...props }) {
    return (
        <CustomButtonContainer {...props}> 
            {children}
        </CustomButtonContainer>
    )
}
