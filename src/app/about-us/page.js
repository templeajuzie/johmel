'use client'

import AboutComp from '@/Components/About/AboutComp';
import FooterComp from '@/Components/Footer/FooterComp';
import NavbarComp from '@/Components/Navbar/NavbarComp';

const AboutUs = () => {
  return ( 
    <div className="flex min-h-screen flex-col bg-black">
      <NavbarComp />
      <AboutComp />
      <FooterComp />
    </div>
   );
}
 
export default AboutUs;