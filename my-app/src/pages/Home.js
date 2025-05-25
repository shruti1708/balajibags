import React from 'react'
// import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import WhyUs from '../components/WhyUs'
import ProductsCarousel from '../components/ProductsCarousel'
import TestimonialsAndOwner from '../components/TestimonialsAndOwner'
import LocationsCovered from '../components/LocationsCovered'
// import Footer from '../components/Footer'

function Home() {
  return (
    <div>

{/* <Navbar/> */}
<Banner/>
<WhyUs/>
<ProductsCarousel/>
<LocationsCovered/>
<TestimonialsAndOwner/>
{/* <Footer/> */}
        
    </div>
  )
}

export default Home