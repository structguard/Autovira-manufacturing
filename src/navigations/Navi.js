import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import WhatWeDo from "../components/WhatWeDo";
import Products from "../components/Products";
// import Services from "./components/Services";
// import Events from "./components/Events";
// import Gallery from "./components/Gallery";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import ExploreSection from '../components/ExploreSection';
import Manufacturinghome from '../screens/maniscreenss/Manufacturinghome';
import Eventhome from '../screens/eventscreens/Eventhome';
// import ExploreSection from "../components/ExploreSection";






const Navi = () => {

    return (

        <Routes>
            {/* <Route path="/" element={<ExploreSection />} /> */}

            <Route path="/" element={<Manufacturinghome />} />
            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/home" element={<Home />} />
            <Route path="/WhatWeDo" element={<WhatWeDo />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Footer" element={<Footer />} />

            <Route path="/Eventhome" element={<Eventhome />} />





        </Routes>


    );
};

export default Navi;

// import React from 'react'
// import Navbar from '../components/Navbar'
// import Home from "../components/Home";
// import WhatWeDo from '../components/WhatWeDo';
// import OurProducts from '../components/Products';
// import AboutUs from '../components/About';
// import ContactUs from '../components/Contact';
// import Footer from '../components/Footer';

// const Navi = () => {
//     return (
//         <div>
//             <Navbar />
//             <Home />
//             <WhatWeDo />
//             <OurProducts />
//             <AboutUs />
//             <ContactUs />
//             <Footer />
//         </div>
//     )
// }

// export default Navi