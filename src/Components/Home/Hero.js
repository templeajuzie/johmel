'use client';
import { HiMail, HiUser } from 'react-icons/hi';

const Hero = () => {
  return (
    <div className='relative z-0 h-[80vh] md:h-[90vh] overflow-hidden m-0 bg-black'>
      <video
        autoPlay
        loop
        muted
        className='absolute top-0 left-0 w-full h-full object-cover bg-black opacity-50'>
        <source src='/Hero.mp4' type='video/mp4' />
      </video>
      <div className='relative '>
        <div className='max-w-[85rem] mx-auto  px-4 sm:px-6 lg:px-8 py-10 lg:py-16'>
          <div className='max-w-2xl mt-44 text-center mx-auto lg:mt-16'>
            <div className='mt-2 max-w-2xl'>
              <h1 className='block font-semibold text-gray-300 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200 '>
                Johmel Integrated Services Limited
              </h1>
            </div>

            <div className='mt-5 max-w-3xl'>
              <p className='text-lg text-gray-400 dark:text-gray-400'>
                provides solution oriented, cost effective, responsive, high
                quality consultancy and projects management services.
              </p>
            </div>

            {/* <div
              className='mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center
            '>
              <a
                className='inline-flex justify-center items-center gap-x-3 text-center bg-[#f4c430] hover:bg-[#f5e692] border border-transparent text-black text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-4 px-4 dark:focus:ring-offset-gray-800'
                href='javascript:;'>
                Get started
                <svg
                  className='w-3 h-3'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'>
                  <path
                    d='M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </svg>
              </a>
              <a
                className='py-4 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-gray-200 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:text-white dark:hover:bg-gray-800 dark:hover:border-gray-900 dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800'
                href='#'>
                <HiUser className='font text-lg' />
                Let{`'`}s Talk
              </a>
            </div> */}
            <div className='inline-block mt-8 py-1 px-4 font-semibold bg-green-100 rounded-full'>
              <div class='flex flex-wrap items-center -m-1'>
                <div className=' p-1'>
                  <a className='text-sm' href=''>
                    &#x1F44B; We Think Global, We Work Local
                  </a>
                </div>
                <div className=' p-1'>
                  <svg
                    width='15'
                    height='15'
                    viewbox='0 0 15 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M8.66667 3.41675L12.75 7.50008M12.75 7.50008L8.66667 11.5834M12.75 7.50008L2.25 7.50008'
                      stroke='black'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
