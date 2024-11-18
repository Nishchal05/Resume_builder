import React from 'react';
import Navbar from './Resume-content/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ResumeBody } from './Resume-content/ResumeBody/ResumeBody';
import { SelectorTemplate } from './SelectorTemplate'; 
import Templatecontainer from './Resume-content/Templatecontainer/Templatecontainer';
import Resume from './Resume-content/Resume/Resume';
import { MatcherProvider } from './Login';
const App = () => {
  return (
    <BrowserRouter>
    <MatcherProvider>
      <Navbar />
      <SelectorTemplate>
        <Routes>
          <Route path="/" element={<ResumeBody />} />
          <Route path="/Templatecontainer" element={<Templatecontainer/>} />
          <Route path="/Resume" element={<Resume/>}/>
        </Routes>
      </SelectorTemplate>
      </MatcherProvider>
    </BrowserRouter>
  );
};

export default App;
