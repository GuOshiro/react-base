import React from 'react'
import PropType from 'prop-types'
import { BoxContent } from './Card.styles';

const Card = ({ children, ...props }) => {
    return (
        <BoxContent {...props}>
            {children}
        </BoxContent>
    )
}

Card.defaultProps = {
    children: ''
}

Card.proptype = {
    children: PropType.node
}

export default Card
