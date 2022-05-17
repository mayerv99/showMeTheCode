import React from "react";

import Topbar from "./components/Topbar";
import Container from "./components/Container";
import LandingPage from "./components/Sections/LandingPage";
import ServicesSections from "./components/Sections/ServicesSection";
import CalculateSection from "./components/Sections/CalculateSection";

import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Topbar />
      <Container backgroundColor="white" isFirst>
        <LandingPage />
      </Container>
      <Container backgroundColor="gray">
        <ServicesSections />
      </Container>
      <Container backgroundColor="white">
        <CalculateSection />
      </Container>
    </div>
  );
}

export default App;
