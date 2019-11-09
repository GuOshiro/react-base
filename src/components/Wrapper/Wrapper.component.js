import React from 'react'
import PropType from 'prop-types'
import { Content } from './Wrapper.styles'

const Wrapper = ({ children, ...props }) => (
    <Content {...props}>
        {children}
    </Content>
)

Wrapper.propType = {
    children: PropType.node
}

export default Wrapper