import styled from 'styled-components';
import { space, layout, color, background, flex, flexbox } from 'styled-system'
import * as $D from '../../constants/dimensions'

export const Content = styled.div`
  width: 100%;
  .section{
    padding: 70px 20px;
    max-width: ${$D.DESKTOP}
    margin: 0 auto;
    ${space}
  }
  ${background}
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  ${flex}
`

