'use client';

import ExperienceComp from '@/Components/Experience/ExperienceComp';
import FooterComp from '@/Components/Footer/FooterComp';
import NavbarComp from '@/Components/Navbar/NavbarComp';

const Events = () => {
  return (
    <div className='flex min-h-screen flex-col bg-black'>
      <NavbarComp />
      <ExperienceComp />
      <FooterComp />
    </div>
  );
};

export default Events;
