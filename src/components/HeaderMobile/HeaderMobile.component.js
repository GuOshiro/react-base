import React from 'react'
import {
    Container,
    Right,
    Hamburger
} from './HeaderMobile.styles'
import PropTypes from 'prop-types'


const HeaderMobile = ({ showMenu }) => {
    return (
        <>
            <Container>
                <Right>
                    <Hamburger onClick={() => showMenu()}>
                        <div className='top-bun'></div>
                        <div className='meat'></div>
                        <div className='bottom-bun'></div>
                    </Hamburger>
                </Right>
            </Container>
        </>
    )
}

HeaderMobile.defaultProps = {
    showMenu: false
}

HeaderMobile.propTypes = {
    showMenu: PropTypes.oneOfType([PropTypes.bool, PropTypes.func])
}

export default HeaderMobile