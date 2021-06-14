import React, {useState} from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./globalStyle";
import { SliderData } from './data/SliderData'; 
import Dropdown from "./components/Dropdown/Dropdown";
import Info from "./components/Info/Info";
import { InfoData } from "./data/InfoData";



function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <Info {...InfoData}/>
    </>
  );
}

export default App;
