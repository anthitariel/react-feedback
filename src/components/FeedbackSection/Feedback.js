import React from "react";
import {
  InputContainer,
  InputItems,
  InputHeading,
  Button,
  Columns,
  SectionContainer,
  SectionImage1,
  SectionImage2,
  SectionImage3,
} from "./FeedbackStyles";

const FeedbackSection = () => {
  return (
    <SectionContainer>
      <Columns>
        <InputContainer>
          <InputHeading>Reach out to us!</InputHeading>
          <InputItems placeholder="Your name*" size="90px" />
          <InputItems placeholder="Your e-mail*" size="90px" />
          <InputItems placeholder="Your message*" size="190px" />
          <Button>Send message</Button>
        </InputContainer>
      </Columns>
      <Columns>
        <SectionImage1 />
        <SectionImage2 />
        <SectionImage3 />
      </Columns>
    </SectionContainer>
  );
};

export default FeedbackSection;
