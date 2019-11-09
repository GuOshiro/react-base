import styled from 'styled-components'
import * as $D from '../../constants/dimensions'

export const Nav = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 50px 0;    
  position: ${props => props.fixed ? 'fixed' : 'absolute'};
  .header-desktop {
    display: block;
    max-width: ${$D.DESKTOP};
    width: 100%;
    margin: 0px auto;
    position: relative;
    @media(max-width: 776px){
      max-width: ${$D.DESKTOP};
      width: 100%;
    }
  }
  .header-mobile {
    display: none;
    z-index: 10;
    max-width: ${$D.DESKTOP};
  }
  @media(max-width: 776px){
    .header-desktop {
      display: none;
    }
    .header-mobile {
      display: block;
      max-width: auto;
    }
  }
`;

export const Title = styled.h1`
  color: #000;
  font-weight: 600;
  margin: 0;
`;

