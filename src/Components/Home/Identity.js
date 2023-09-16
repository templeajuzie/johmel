'use client';

const Identity = () => {
  return (
    <section className='text-gray-400 body-font md:px-16'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h2 className='text-lg text-[#00A651] tracking-widest font-medium title-font mb-1'>
            Who we are
          </h2>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
            All you need to know about Johmel Integrated Services Limited
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            JISL is a Nigerian engineering services company that provides
            solution oriented, cost effective, responsive, high quality
            consultancy and projects management services in the area of: Marine
            and Oil Support Services, Vessels for Marine Operations, Supply of
            Highly Skilled Technical Manpower Local and Expatriate Personnel and
            Fabrication, Maintenance and Rehabilitation of Facilities and
            Equipment including Instrumentation Tools, Non-Destructive Test and
            Inspection Certification.
          </p>
        </div>
        <div className='flex flex-wrap'>
          <div className='w-full lg:w-[30%] px-8 py-6 border-l-2 border-gray-800'>
            <h2 className='text-lg sm:text-xl text-white font-medium title-font mb-2'>
              Our Mission
            </h2>
            <p className='leading-relaxed text-base mb-4'>
              Our mission is to Provide Quality Management, Human Resources
              Development and Integrity Management through Cutting Edge
              Technology and Exceptional Client Service with Well Dedicated and
              Motivated Staff. <br /> <br />
            </p>
            <a className='text-[#00A651] inline-flex items-center'>
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
          <div className='w-full lg:w-[30%] px-8 py-6 border-l-2 border-gray-800'>
            <h2 className='text-lg sm:text-xl text-white font-medium title-font mb-2'>
              Our Vision
            </h2>
            <p className='leading-relaxed text-base mb-4'>
              To be the Leading Integrated Oil and Gas Service Company, with
              Exceptional Services to Our Clients, Our Staff And All
              Stakeholders. <br /> <br /> Our Business Principles are based on our core values
              which ensures team work, safety, accountability and trust within
              us and outside our organization.
            </p>
            <a className='text-[#00A651] inline-flex items-center'>
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
          <div className='xl:w-[40%] lg:w-[30%] md:w-full px-8 py-6 border-l-2 border-gray-800'>
            <h2 className='text-lg sm:text-xl text-white font-medium title-font mb-2'>
              What we do
            </h2>
            <p className='leading-relaxed text-base mb-4'>
              Johmel Integrated Services Limited provides valuable services to
              Oil & Gas, Petrochemical, Power and Telecommunication Industries.{' '}
              <br /> <br /> Our Services Include: • Corrosion and Coating
              Services • Pipe-Line Maintenance Surveillance • Marine and Oil
              Support Services • Non-Destructive Testing and Inspection
              Certification • click to learn more about our services.
            </p>
            <a className='text-[#00A651] inline-flex items-center'>
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
    </section>
  );
};

export default Identity;
