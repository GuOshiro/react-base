import React, { Fragment } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import * as $C from '../../constants/colors'
import Button from '../Buttons'

const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    background: ${$C.GRAY_DARK};
    opacity: 0.3;
`
const Menu = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    transition: .7s all;
    left: ${props => props.openMenu ? 0 : '100%'};
    z-index: 2;
    background: ${$C.BLUE_GRADIENT};
`

const MenuList = styled.ul`
    margin-top: 100px;
    padding: 0 20px;
    &>button{
        text-align: left;
        font-size: 20px;
        
    }
`

const Item = styled.li`
    color: ${$C.GRAY_WHITE};
    padding: 15px 0;
    border-bottom: 0.2px solid ${$C.GRAY_WHITE};
    :last-of-type{
        border-bottom: none;
    }
`

const MenuLateral = ({ openMenu, closeMenu }) => {

    const navigate = (route) => {
        history.push(route)
        closeMenu()
    }

    const history = useHistory()
    return (
        <Fragment>
            {openMenu && <Overlay />}
            <Menu openMenu={openMenu}>
                <MenuList>
                    <Item><Button textAlign='left' width={'100%'} type='text' onClick={() => navigate('/home')} label='Home' /></Item>
                    <Item><Button textAlign='left' width={'100%'} type='text' onClick={() => navigate('/servicos')} label='Serviços' /></Item>
                    <Item><Button textAlign='left' width={'100%'} type='text' onClick={() => navigate('/na-midia')} label='Na Mídia' /></Item>
                    <Item><Button textAlign='left' width={'100%'} type='text' onClick={() => navigate('/portfolio')} label='Porfólio' /></Item>
                    <Item><Button textAlign='left' width={'100%'} type='text' onClick={() => navigate('/blog')} label='Blog' /></Item>
                    <Item><Button textAlign='left' width={'100%'} type='text' onClick={() => navigate('/vagas')} label='Vagas' /></Item>
                </MenuList>
            </Menu>
        </Fragment>
    )
}

export default MenuLateral;