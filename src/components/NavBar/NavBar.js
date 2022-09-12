import React, { useState } from "react";
import logo from "../../images/Logo.png";
import "./NavBar.css";
import styled, { ThemeProvider } from "styled-components";
import Switch from 'react-switch';
import { GlobalStyles, lightTheme, darkTheme } from "./Theme";

const StyledApp = styled.div``;

const NavBar = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="container">
      <div className="logoContainer">
        <img src={logo} alt="" />
      </div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <Switch onChange={themeToggler} checked={theme === "dark"} />
        </StyledApp>
      </ThemeProvider>
    </div>
  );
};

export default NavBar;
