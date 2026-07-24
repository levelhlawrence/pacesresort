import React, { useState } from "react";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import aboutData from "./Components/AboutPgData.js";
import Gallery from "./Pages/Gallery";
import Contacts from "./Pages/Contacts";
import galleryImgData from "./Components/GalleryImages";

const App = () => {
  const [aboutPgData] = useState(aboutData());
  const [galleryData] = useState(galleryImgData());

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_48%),linear-gradient(135deg,_#05070b,_#101722)] text-stone-100">
      <Nav />
      <Home />
      <About imageData={aboutPgData} />
      <Gallery galleryImgData={galleryData} />
      <Contacts />
    </div>
  );
};

export default App;
