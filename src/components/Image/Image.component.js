import React from 'react'
import PropTypes from 'prop-types'
import api from '../../utils/services'
import styled from 'styled-components'
import { space, layout } from 'styled-system'

const Img = styled.img`
    display: block;
    position: relative;
    ${space}
    ${layout}
`

const Image = ({ src, title, ...props }) => (
    <Img {...props} alt={title} src={`${src ? `${api.url}/${src}` : `${process.env.PUBLIC_URL}/image/default.png`}`} />
)

Image.defaultProps = {
    src: '',
    title: 'default'
}

Image.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string
}

export default Image