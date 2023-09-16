'use client';

import Image from 'next/image';
import logo from '../../../public/Resources/images/johmel.png';
import { HiMenuAlt3, HiUserCircle } from 'react-icons/hi';
import Link from 'next/link';
import { useState } from 'react';
import Dropdownnav from './Dropdownnav';

const NavbarComp = () => {
  const [profilenav, setProfilenav] = useState(false);

  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className='px-4 md:px-16 py-4 text-gray-400 top-0 z-10 sticky relative bg-gray-100 body-font'>
      <div className='container mx-auto flex flex-row items-center justify-between'>
        <a
          href='/'
          className='flex title-font font-medium items-center text-white h-10 w-auto'>
          <Image
            src={logo}
            alt='TMT Logo'
            width={180}
            height={250}
            className='w-auto h-auto md:w-auto md:h-50 lg:w-auto lg:h-auto z-0'
          />
        </a>
        <nav className='hidden lg:flex md:ml-auto md:mr-auto md:flex-wrap items-center text-base justify-center'>
          <Link href='/experience' className='mr-5 text-gray-900 hover:underline'>
            Experience
          </Link>
          <Link href='/services' className='mr-5 text-gray-900 hover:underline'>
            Services
          </Link>
          <Link href='/policies' className='mr-5 text-gray-900 hover:underline'>
            Policies
          </Link>
          <Link href='/about-us' className='mr-5 text-gray-900 hover:underline'>
            About Us
          </Link>
          <Link href='/contact' className='mr-5 text-gray-900 hover:underline'>
            Help Center
          </Link>
        </nav>

        <div className='flex flex-row align-middle gap-7'>
          <Link href='/contact'>
            <button className='hidden  text-white md:inline-flex md:visible items-center bg-[#00a650dd] hover:bg-[#00a650dd] border-0 py-2.5 px-6 focus:outline-none rounded-lg text-base mt-4 md:mt-0'>
              Contact
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-4 h-4 ml-2'
                viewBox='0 0 24 24'>
                <path d='M5 12h14M12 5l7 7-7 7'></path>
              </svg>
            </button>
          </Link>

          <div className='flex align-middle justify-center md:visible lg:hidden'>
            <HiMenuAlt3
              className='flex m-auto text-4xl align-middle ml-4 cursor-pointer text-gray-800 lg:hidden'
              onClick={openMenu}
            />
          </div>
        </div>
      </div>
      {menu && <Dropdownnav />}
    </header>
  );
};

export default NavbarComp;
