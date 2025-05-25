// import React from 'react'
// import Navbar from './components/Navbar'
// import Banner from './components/Banner'
// import WhoWeAre from './components/WhoWeAre'
// import ProductsCarousel from './components/ProductsCarousel'
// import WhyUs from './components/WhyUs'
// import Footer from './components/Footer'

// function App() {
//   return (
//     <div>

// <Navbar/>
// <Banner/>
// <WhyUs/>
// {/* <WhoWeAre/> */}
// <ProductsCarousel/>

// <Footer/>

//     </div>
//   )
// }

// export default App

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar'; // optional if you have one
import Footer from './components/Footer'; // optional


function App() {
  return (
    <>
    <div style={{position: "fixed", top: "0", left: "0", width: "100%", zIndex: "99"}}>
      <Navbar  />

    </div>
      <div style={{ paddingTop: '60px' }}>  {/* adjust 70px to navbar height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />       
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
