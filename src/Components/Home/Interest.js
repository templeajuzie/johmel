'use client';

const InterestComp = () => {
  return (
    <section className='text-gray-400 body-font md:px-16'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        <h2 className='sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5'>
          Explore Our Commitment to Sustainability
        </h2>
        <div className='md:w-3/5 md:pl-6'>
          <p className='leading-relaxed text-base'>
            At JOHMEL, we are dedicated to responsible energy production
            and environmental stewardship. In our Sustainable Practices section,
            discover how we are pioneering initiatives and technologies that
            minimize our environmental impact while maximizing energy
            efficiency. From reducing carbon emissions to protecting local
            ecosystems, we{`'`}re leading the way towards a more sustainable future
            for the oil and gas industry. Join us on this journey and learn
            about our innovative approaches to responsible energy production.
          </p>
          <div className='flex md:mt-4 mt-6'>
            <button className='inline-flex text-white bg-[#00A651] border-0 py-2 px-6 focus:outline-none hover:bg-[#f5e692] rounded-lg'>
              Continue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestComp;
