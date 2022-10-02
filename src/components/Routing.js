import React from 'react';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import About from '../containers/About';
import Home from '../containers/Home'
import Project from '../containers/Project';
import Skills from '../containers/Skills';
import Contact from '../containers/Contact';
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from '../themes';

const StyledApp = styled.div`
color: ${(props) => props.theme.fontColor};
`;
function Routing() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <StyledApp>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<Home themeToggler={themeToggler} />} Exact />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About themeToggler={themeToggler} />} />
            <Route path="/skills" element={<Skills themeToggler={themeToggler} />} />
            <Route path='/project' element={<Project themeToggler={themeToggler} />} />
            <Route path='/contact' element={<Contact themeToggler={themeToggler} />} />
          </Routes>
        </StyledApp>
      </ThemeProvider>

    </>

  )
}

export default Routing