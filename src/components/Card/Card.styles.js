import styled from 'styled-components';
import { space, layout, color } from 'styled-system'
import * as $C from '../../constants/colors'

export const BoxContent = styled.div`
  background: ${$C.WHITE};
  box-shadow: 0 2px 20px 0 rgba(67 ,57 ,72 ,.1);
  padding: 15px 20px;
  &.link{
    cursor: pointer;
  } 
  ${space} 
  ${layout} 
  ${color}
`