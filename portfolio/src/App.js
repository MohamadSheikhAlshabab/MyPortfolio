import './App.css';
import React from 'react';
import Header from "./Components/Header"
// import Item from "./Components/Item"
import Intro from "./Components/Intro"
import Service from "./Components/Service"
import About from "./Components/About"
import Work from "./Components/Work"
import Skills from "./Components/Skills"
import Footer from "./Components/Footer"

export default function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className='App'>
      <Header open={open} setOpen={setOpen}  />
      {/* <Item /> */}
      <Intro />
      <Service />
      <About />
      <Work />
      <Skills/>
      <Footer />
    </div>
  );
}
