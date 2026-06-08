import React from 'react'
import Navbar from '../../components/Navbar'
import Home from '../../components/Home'
import WhatWeDo from '../../components/WhatWeDo'
import OurProducts from '../../components/Products'
import AboutUs from '../../components/About'
import ContactUs from '../../components/Contact'
import Footer from '../../components/Footer'

const Manufacturinghome = () => {
    return (
        <div>

            <Navbar />
            <section id="home">
                <Home />
            </section>
            <section id="whatwedo">
                <WhatWeDo />
            </section>
            <section id="products">
                <OurProducts />
            </section>

            <section id="about">
                <AboutUs />
            </section>
            <section id="contact">
                <ContactUs />

            </section>

            <Footer />

        </div>
    )
}

export default Manufacturinghome