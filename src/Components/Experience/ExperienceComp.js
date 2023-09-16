import Image from 'next/image';

import img from '../../../public/Resources/images/serv1.jpg';
import cert1 from '../../../public/Resources/images/cert1.png';
import cert2 from '../../../public/Resources/images/cert2.png';
import cert3 from '../../../public/Resources/images/cert3.png';
import cert4 from '../../../public/Resources/images/cert4.png';
import cert5 from '../../../public/Resources/images/cert5.png';
import cert6 from '../../../public/Resources/images/cert6.png';
import director from '../../../public/Resources/images/director.jpeg';

const ExperienceComp = () => {
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
            More from Us
          </h2>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-black lg:px-48'>
            We have over 25 Years of experience, and have been certified by several industrial bodies.
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            Johmel Integrated services Limited have obtained certifications from
            multiple industry authorities, validating our capability to deliver
            our services, enabling us to deliver our services to our clients,
            provideing solution oriented, cost effective, responsive, high
            quality consultancy and projects management services in areas related to us.
          </p>
        </div>

        <div className='w-full mt-24 md:px-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
            <div className='w-full p-1 md:p-2 shadow-2xl'>
              <Image
                class='block h-full w-full rounded-lg object-cover object-center'
                src={cert1}
                width={500}
                height={500}
                alt=''
                draggable={false}
              />
            </div>
            <div className='w-full p-1 md:p-2 shadow-2xl rounded-lg '>
              <Image
                class='block h-full w-full rounded-lg object-cover object-center'
                src={cert2}
                width={500}
                height={500}
                draggable={false}
                alt=''
              />
            </div>
            <div className='w-full p-1 md:p-2 shadow-2xl'>
              <Image
                class='block h-full w-full rounded-lg object-cover object-center'
                src={cert3}
                width={500}
                height={500}
                draggable={false}
                alt=''
              />
            </div>
            <div className='w-full p-1 md:p-2 shadow-2xl'>
              <Image
                class='block h-full w-full rounded-lg object-cover object-center'
                src={cert4}
                width={500}
                height={500}
                alt=''
                draggable={false}
              />
            </div>
            <div className='w-full p-1 md:p-2 shadow-2xl'>
              <Image
                class='block h-full w-full rounded-lg object-cover object-center'
                src={cert5}
                width={500}
                height={500}
                draggable={false}
                alt=''
              />
            </div>
            <div className='w-full p-1 md:p-2 shadow-2xl'>
              <Image
                class='block h-full w-full rounded-lg object-cover object-center'
                src={cert6}
                width={500}
                height={500}
                draggable={false}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceComp;
