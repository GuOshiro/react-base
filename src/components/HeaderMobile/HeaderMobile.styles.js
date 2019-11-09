import styled from 'styled-components'
import * as $C from '../../constants/colors'
import * as $D from '../../constants/dimensions'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: ${$D.DESKTOP};
  margin: 0px auto;
  @media(max-width: 776px){
    width: 100vw;
    margin: 0 0 0 -20px;
  }
`;

export const Right = styled.nav`
  text-align: right;
  position: absolute;
  right: 20px;
`;

export const Left = styled.nav`  
  align-items: center;
  width: 80%;
  display: flex;
  svg {
    width: 150px;
  }
  a {
    color: ${$C.GRAY_WHITE};
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 0.8rem;
    transition: .2s all;
    &:hover {
      opacity: .5;
    }
  }
  > * {
    margin: 0 10px;
  }
`;

export const ButtonIcon = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  transition: .2s all;
  opacity: 1;
  :hover {
    opacity: 0.4;
  }
`

export const Hamburger = styled.div`
    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: space-between;
    width: 40px;
    height: 25px;
    cursor: pointer; 
    div{
        align-self: flex-end;
        height: 2px;
        width: 100%;
        background: ${$C.ORANGE_GRADIENT};
    }
    .meat{ width: 75%; transition: all 200ms ease-in-out; }
    .bottom-bun{ width: 50%; transition: all 400ms ease-in-out; }
    &:hover{
        div { width: 100%; }  
        .top-bun{ animation: burger-hover 1s infinite ease-in-out alternate; } 
        .meat{ animation: burger-hover 1s infinite ease-in-out alternate forwards 200ms; }
        .bottom-bun{ animation: burger-hover 1s infinite ease-in-out alternate forwards 400ms; }
    } 
    @keyframes burger-hover{
        0%{ width: 100% }
        50%{ width: 50% }
        100%{ width: 100% }
    }
`


