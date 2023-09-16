'use client';

import Image from 'next/image';
import johmelpartner from '../../../public/Resources/images/johmelpartner.png';

const ConveinerSnippet = () => {
  return (
    <section className='text-gray-400 md:px-16 body-font'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        <div className='lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden'>
          <Image
            alt='feature'
            className='object-cover h-full w-auto lg:h-[100%]'
            src={johmelpartner}
            height={500}
            width={300}
          />
        </div>
        <div className='flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center'>
          <div className='flex flex-col mb-10 lg:items-start items-center'>
            <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-[#00A651] mb-5'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-6 h-6'
                viewBox='0 0 24 24'>
                <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                <circle cx='12' cy='7' r='4'></circle>
              </svg>
            </div>

            <div className='flex-grow'>
              <h2 className='text-white text-lg title-font font-medium mb-3'>
                JOHMEL INTEGRATED SERVICES JV PARTNERS
              </h2>
              <p className='leading-relaxed text-base'>
                JISL JV is positioned with distinct advantage based on our
                synergy of combined experiences and expertise providing
                unrivaled services to the oil and gas industry in a bid to
                achieving a successful outcome for overall Oil Field Services.
                JISL JV is a one‐stop shop that provides clients with a complete
                packaged range of services starting from concept to actual
                project delivery. <br /> <br />
                Our expression of intent & expert service provision under the
                major activities include: • Engineering & Project Management •
                Concept • Pre‐FEED/ FEED • Detailed Engineering • Fabrication •
                Construction & Installation • Onshore & Offshore Facilities &
                Pipelines • Cross‐Country Pipelines • Gas Gathering Facilities •
                Procurement (Local & Foreign) • Well Services • O&M Services on
                Rigs & FPSOs • Dredging • Commissioning • Pipe Coating & Storage
              </p>
              <a className='mt-3 text-[#00A651] inline-flex items-center'>
                Learn More
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConveinerSnippet;
