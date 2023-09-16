'use client';
import FooterComp from '@/Components/Footer/FooterComp';
import NavbarComp from '@/Components/Navbar/NavbarComp';
import ServicesComp from '@/Components/Services/ServiceComp';

const ContactUs = () => {
  return (
    <div className='flex min-h-screen flex-col bg-black'>
      <NavbarComp />
      <ServicesComp />
      <FooterComp />
    </div>
  );
};

export default ContactUs;
