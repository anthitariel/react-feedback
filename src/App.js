import React from "react";
import { BrowserRouter } from "react-router-dom";
import { FeedbackSection, Navbar, FooterSection } from "./components";
import { Container, GlobalStyle } from "./globalStyles";

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <GlobalStyle />
        <Navbar />
        <FeedbackSection />
        <FooterSection />
      </Container>
    </BrowserRouter>
  );
}
