
import './App.css';
import ResponsiveAppBar from './Header'
import Containertop from './componentsused/container1';
import OurServices from './componentsused/ourservices';
import Customercard from './componentsused/customercard';
import DownloadSection from './componentsused/downloadcomponent';
import Footer from './componentsused/footer';
import { useState } from 'react';
import React from "react";
// import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#ffffff"
    }
  }
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});

function App() {
  const [light, setLight] = useState(true);
  return (
    <>
    <ResponsiveAppBar />
    <Containertop reverse = {false}/>
    <OurServices />
    <Customercard/>
    <DownloadSection/>
    <Footer/>
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <Button onClick={() => setLight((prev) => !prev)}>Toggle Theme</Button>
    </ThemeProvider>

    </>
  );
}

export default App;
