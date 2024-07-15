import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About/index";
import Logement from "./pages/Logement";
import Error from "./pages/Error/index";
import Footer from "./components/Footer";
import styled from "styled-components";

const AppContainer = styled.div`
  font-family: Montserrat;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin: 0;
`;
const WithoutFooter = styled.div`
  max-width: 100%;
  width: 100%;
  min-height: 80vh;
  padding-top: 45px;
  padding-left: 100px;
  padding-right: 100px;
  box-sizing: border-box;

  @media (min-width: 1200px) {
    padding-left: 200px;
    padding-right: 200px;
  }

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const ContentWrap = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  max-width: 100vw;
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppContainer>
        <WithoutFooter>
          <Header />
          <ContentWrap>
            <Routes>
              <Route path="/Le-site-de-Kasa-Fr/" element={<Home />} />
              <Route
                path="/Le-site-de-Kasa-Fr/logement/:idLogement"
                element={<Logement />}
              />
              <Route path="/Le-site-de-Kasa-Fr/about" element={<About />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </ContentWrap>
        </WithoutFooter>
        <Footer />
      </AppContainer>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
