import "./App.css";
import ResponsiveAppBar from "./Header";
import Containertop from "./componentsused/container1";
import OurServices from "./componentsused/ourservices";
import Customercard from "./componentsused/customercard";
import DownloadSection from "./componentsused/downloadcomponent";
import Footer from "./componentsused/footer";
import React from "react";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Containertop reverse={false} />
      <OurServices />
      <Customercard />
      <DownloadSection />
      <Footer />
    </>
  );
}

export default App;
