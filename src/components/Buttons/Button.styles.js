import styled from 'styled-components'
import * as $C from '../../constants/colors';
import { space, layout, color } from 'styled-system'

export const ButtonWrapper = styled.button`
    background: ${$C.ORANGE_GRADIENT}
    border-radius: 100rem;
    border: none;
    color: ${$C.WHITE};
    cursor: pointer;
    font-weight: 300;
    margin: 1px;
    padding: 14px 30px;
    text-transform: uppercase;
    transition: all .3s ease;
    width: auto;
    &:hover {
        opacity: .7;
    }
    &.text{
        background: none;
        border-radius: none;
        border: none;
        font-size: 13px;
        padding: 0px 14px;
        width: auto;
        outline: none;
        height: auto:  
    }
    &.outline{
        background: none;
        border: 3px solid ${$C.ORANGE_DARK}
        position: relative;
        z-index: 1;
    }
    ${space};
    ${layout};
    ${color};
`;
