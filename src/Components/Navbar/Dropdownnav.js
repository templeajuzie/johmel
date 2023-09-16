'use client';
import Link from 'next/link';

const Dropdownnav = () => {
  const navigation = [
    { name: 'Experience', href: '/experience' },
    { name: 'Services', href: '/services' },
    { name: 'Policies', href: '/policies' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Help Center', href: '/contact' },
  ];

  return (
    <div className='py-10 px-4  h-screen'>
      <div className='-my-6 divide-y divide-gray-500/10'>
        <div className='space-y-2 py-6'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='-mx-3 block text-gray-800 rounded-lg px-3 py-2 text-base font-semibold leading-7'>
              {item.name}
            </Link>
          ))}
        </div>
        <div className='py-6'>
          <Link href='/contact'>
            <button className='flex text-white md:inline-flex md:visible items-center bg-[#00A651] hover:bg-[#256544] border-0 py-3 px-6 focus:outline-none rounded text-base mt-4 md:mt-0'>
              Contact
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-4 h-4 ml-2'
                viewBox='0 0 24 24'>
                <path d='M5 12h14M12 5l7 7-7 7'></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dropdownnav;
