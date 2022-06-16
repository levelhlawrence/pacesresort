// importing react
import React, { useState } from "react";

// importing main stylesheet
import "./Styles/App.scss";
// Importing components and pages
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
// importing images for about page
import aboutData from "./Components/AboutPgData.js";
import Gallery from "./Pages/Gallery";
import Contacts from "./Pages/Contacts";
import galleryImgData from "./Components/GalleryImages";

const App = () => {
  const [aboutPgData, setAboutPgData] = useState(aboutData());
  const [galleryData, setGalleryData] = useState(galleryImgData());
  return (
    <div className="App">
      <Nav home={<Home />} />
      <Home />
      <About imageData={aboutPgData} />
      <Gallery galleryImgData={galleryData} />
      <Contacts />
    </div>
  );
};

export default App;
