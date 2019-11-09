import React from 'react';
import ReactDOM from 'react-dom';
import {
  HeadLine1,
  HeadLine2,
  HeadLine3,
  HeadLine4,
  HeadLine5,
  LabelText,
  Paragraph,
  SpanText
} from './Typography.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <>
      <HeadLine1>I'm HeadLine1</HeadLine1>
      <HeadLine2>I'm HeadLine2</HeadLine2>
      <HeadLine3>I'm HeadLine3</HeadLine3>
      <HeadLine4>I'm HeadLine4</HeadLine4>
      <HeadLine5>I'm HeadLine5</HeadLine5>
      <LabelText>I'm LabelText</LabelText>
      <Paragraph>I'm Paragraph</Paragraph>
      <SpanText>I'm SpanText</SpanText>
    </>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});