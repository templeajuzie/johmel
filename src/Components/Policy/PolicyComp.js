import Image from 'next/image';

const PolicyComp = () => {
  return (
    <div className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0'>
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <svg
          className='absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]'
          aria-hidden='true'>
          <defs>
            <pattern
              id='e813992c-7d03-4cc4-a2bd-151760b470a0'
              width={200}
              height={200}
              x='50%'
              y={-1}
              patternUnits='userSpaceOnUse'>
              <path d='M100 200V.5M.5 .5H200' fill='none' />
            </pattern>
          </defs>
          <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
            <path
              d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
              strokeWidth={0}
            />
          </svg>
          <rect
            width='100%'
            height='100%'
            strokeWidth={0}
            fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)'
          />
        </svg>
      </div>

      <div className='general'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h2 className='text-lg text-[#00A651] tracking-widest font-medium title-font mb-1'>
            Terms and Conditions of Use and Policy!
          </h2>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-black lg:px-48'>
            Before you explore our services or interact with our website, we
            encourage you to carefully read and understand the full version of
            our Terms and Conditions of Use
          </h1>
        </div>

        <div className="body h-screen">

        </div>
      </div>
    </div>
  );
};

export default PolicyComp;
