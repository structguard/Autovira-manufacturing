// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import WhatWeDo from "./components/WhatWeDo";
// import Products from "./components/Products";
// import Services from "./components/Services";
// import Events from "./components/Events";
// import Gallery from "./components/Gallery";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import ExploreSection from "./components/ExploreSection";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <ExploreSection />
//       {/* <section id="home">
//         <Home />
//       </section>

//       <section id="whatwedo">
//         <WhatWeDo />
//       </section>

//       <section id="products">
//         <Products />
//       </section>

//       {/* <Services /> */}
//       {/* <Events /> */}
//       {/* <Gallery /> */}
//       {/* <section id="about">
//         <About />
//       </section>
//       <section id="contact">
//         <Contact />
//       </section> */} 

//       <Footer />
//     </>
//   );
// }

// export default App;


import React from 'react'
import Navi from './navigations/Navi'
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExploreSection from './components/ExploreSection';

const App = () => {
  return (

    <BrowserRouter>
      {/* <Navbar /> */}
      {/* <ExploreSection /> */}
      <Navi/>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App

