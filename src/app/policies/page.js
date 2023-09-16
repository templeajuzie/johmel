'use client';

import AboutComp from '@/Components/About/AboutComp';
import FooterComp from '@/Components/Footer/FooterComp';
import NavbarComp from '@/Components/Navbar/NavbarComp';
import PolicyComp from '@/Components/Policy/PolicyComp';

const Experience = () => {
  return (
    <div className='flex min-h-screen flex-col bg-black'>
      <NavbarComp />
      <PolicyComp />
      <FooterComp />
    </div>
  );
};

export default Experience;
