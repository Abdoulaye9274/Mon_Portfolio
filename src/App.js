import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #0a192f;
  color: #8892b0;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={
              <>
                <About />
                <Projects />
                <ContactForm />
              </>
            } />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App;
