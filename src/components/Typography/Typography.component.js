import React from 'react';
import theme from '../../theme';
import DynamicType from './DynamicType';

const {
  headLine5,
  headLine1,
  headLine2,
  labelText,
  headLine3,
  headLine4,
  paragraph,
  spanText
} = theme.textStyles;

export const HeadLine1 = props => (
  <DynamicType {...headLine1} {...props}>
    {props.children}
  </DynamicType>
);

export const HeadLine2 = props => (
  <DynamicType {...headLine2} {...props}>
    {props.children}
  </DynamicType>
);

export const HeadLine3 = props => (
  <DynamicType {...headLine3} {...props}>
    {props.children}
  </DynamicType>
);

export const HeadLine4 = props => (
  <DynamicType {...headLine4} {...props}>
    {props.children}
  </DynamicType>
);

export const HeadLine5 = props => (
  <DynamicType {...headLine5} {...props}>
    {props.children}
  </DynamicType>
);

export const Paragraph = props => (
  <DynamicType {...paragraph} {...props}>
    {props.children}
  </DynamicType>
);

export const SpanText = props => (
  <DynamicType {...spanText} {...props}>
    {props.children}
  </DynamicType>
);

export const LabelText = props => (
  <DynamicType {...labelText} {...props}>
    {props.children}
  </DynamicType>
);
