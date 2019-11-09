import React from "react";
import { storiesOf } from "@storybook/react";

import {
  HeadLine5,
  H1,
  h2,
  LabelText,
  H3,
  HeadLine4,
  Paragraph,
  PrimaryPageTitle,
  SpanText
} from "./Typography.component";

storiesOf("Typography", module)
  .addDecorator(storyFn => <div style={{ padding: "16px" }}>{storyFn()}</div>)
  .add("default", () => (
    <>
      <HeadLine1 as="h1" mb="2">
        HeadLine1: Poppins - 42px / 48px
      </HeadLine1>
      <HeadLine2 as="h2" mb="2">
        HeadLine2: Poppins - 32px / 36px
      </HeadLine2>
      <HeadLine3 as="h3" mb="2">
        HeadLine3: Poppins - 24px / 28px
      </HeadLine3>
      <HeadLine4 as="h4" mb="4">
        HeadLine4: Poppins - 20px / 24px
      </HeadLine4>
      <div style={{ display: "flex" }}>
        <HeadLine5 as="h5" mb="2" mr="3">
          HeadLine5: Poppins - 18px / 24px
        </HeadLine5>
        <HeadLine5 as="h5" mb="2" fontWeight="bold">
          HeadLine5: Poppins - 18px / 24px - BOLD
        </HeadLine5>
      </div>
      <div style={{ display: "flex" }}>
        <Paragraph as="p" mb="2" mr="3">
          Paragraph: Poppins - 16px / 24px
        </Paragraph>
        <Paragraph as="p" mb="2" fontWeight="bold">
          Paragraph: Poppins - 16px / 24px - BOLD
        </Paragraph>
      </div>
      <div style={{ display: "flex" }}>
        <SpanText as="span" mb="2" mr="3">
          SpanText: Poppins - 14px / 18px
        </SpanText>
        <SpanText as="span" mb="2" fontWeight="bold">
          SpanText: Poppins - 14px / 18px BOLD
        </SpanText>
      </div>
      <div style={{ display: "flex" }}>
        <LabelText as="label" mb="2" mr="3">
          LabelText: Poppins - 12px / 14px
        </LabelText>
        <LabelText as="label" mb="2" fontWeight="bold">
          LabelText: Poppins - 12px / 14px BOLD
        </LabelText>
      </div>
    </>
  ))
  .add("colors", () => (
    <>
      <HeadLine1 as="h1" mb="2" color="#0e0b5b">
        HeadLine1: Poppins - 42px / 48px
      </HeadLine1>
      <HeadLine2 as="h2" mb="2" color="#0e0b5b">
        HeadLine2: Poppins - 32px / 36px
      </HeadLine2>
      <HeadLine3 as="h3" mb="2" color="#f4f4f9">
        HeadLine3: Poppins - 24px / 28px
      </HeadLine3>
      <HeadLine4 as="h4" mb="4" color="ORANGE_DARK">
        Page Subheadline Poppins - 20px / 24px
      </HeadLine4>
      <div style={{ display: "flex" }}>
        <HeadLine5 as="h5" mb="2" mr="3" color="SOLITUDE_GRAY">
          HeadLine5: Poppins - 18px / 24px
        </HeadLine5>
        <HeadLine5 as="h5" mb="2" fontWeight="bold" color="BLUE_DARK">
          HeadLine5: Poppins - 18px / 24px - BOLD
        </HeadLine5>
      </div>
      <div style={{ display: "flex" }}>
        <Paragraph as="p" mb="2" mr="3" color="BLUE_DARK">
          Paragraph: Poppins - 16px / 24px
        </Paragraph>
        <Paragraph as="p" mb="2" fontWeight="bold" color="#f17b36">
          Paragraph: Poppins - 16px / 24px - BOLD
        </Paragraph>
      </div>
      <div style={{ display: "flex" }}>
        <SpanText as="span" mb="2" mr="3" color="CHICAGO_GRAY">
          SpanText: Poppins - 14px / 18px
        </SpanText>
        <SpanText as="span" mb="2" fontWeight="bold" color="CHICAGO_GRAY">
          SpanText: Poppins - 14px / 18px BOLD
        </SpanText>
      </div>
      <div style={{ display: "flex" }}>
        <LabelText as="label" mb="2" mr="3" color="DARK_GRAY">
          LabelText: Poppins - 12px / 14px
        </LabelText>
        <LabelText as="label" mb="2" fontWeight="bold" color="DARK_GRAY">
          LabelText: Poppins - 12px / 14px BOLD
        </LabelText>
      </div>
    </>
  ));
