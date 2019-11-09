import styled from 'styled-components';
import {
  borderRadius,
  color,
  colorStyle,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  layout,
  letterSpacing,
  lineHeight,
  size,
  space,
  system,
  textStyle,
  typography
} from 'styled-system';

export default styled.div`
  ${borderRadius}
  ${color}
  ${colorStyle}
  ${fontFamily}
  ${fontSize}
  ${fontStyle}
  ${fontWeight}
  ${layout}
  ${letterSpacing}
  ${lineHeight}
  ${size}
  ${space}
  ${textStyle}
  ${typography}
  ${system({
    textTransform: true
  })}
  transition: color 0.2s ease-out;
  &.post{
    textOverflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;