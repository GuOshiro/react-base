import React from 'react'
import PropType from 'prop-types'
import { ButtonWrapper } from './Button.styles'

const Button = ({ label, type, ...props }) => (
    <ButtonWrapper {...props} className={type}>
        {label}
    </ButtonWrapper>
)

Button.defaultProp = {
    label: 'Button Label',
    type: 'text'
}

Button.propType = {
    label: PropType.string,
    type: PropType.string
}

export default Button