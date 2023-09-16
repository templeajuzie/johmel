import Image from 'next/image';

import img from '../../../public/Resources/images/serv1.jpg';
import director from '../../../public/Resources/images/director.jpeg';

const AboutComp = () => {
  return (
    <div className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 md:px-16 lg:overflow-visible'>
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
      <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='lg:max-w-lg'>
              <p className='text-base font-semibold leading-7 text-indigo-600'>
                Know more about us.
              </p>
              <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                About JOHMEL
              </h1>
              <p className='mt-6 text-xl leading-8 text-gray-700'>
                Johmel with its global approach to services and quality
                management has been able to meet local needs.
              </p>
            </div>
          </div>
        </div>
        <div className='-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
          <Image
            className='w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] object-cover'
            src={img}
            width={300}
            height={300}
            alt=''
          />
        </div>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg'>
              <p>
                Johmel has become a name to beat in the oil and gas industry.
                Drawing professionals with proven years of experience and track
                record has raised confidence with its numerous client. All
                aspect of inspection services are covered by us, project
                management services and training services also meeting the local
                demand for training of personnel which ensures human capacity
                building for the industry.
              </p>
              <ul role='list' className='mt-8 space-y-8 text-gray-600'>
                <li className='flex gap-x-3'>
                  {/* <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      Johmel Integrated Services Limited has Technical
                      Partnership with Foreign affiliates, the Technical
                      Partnership was formed with the following objectives.
                    </strong>{' '}
                    To have a strong commitment to providing quality services to
                    the oil/gas and industrial companies in Nigeria. Enhancement
                    of the Nigerian government policy on development and
                    participation of indigenous companies in Joint Venture
                    relationship with foreign companies. Development of local
                    personnel in acquiring technical knowledge. Provide
                    technical support for solving identified problems in Oil and
                    Gas Companies. JOHMEL GROUP The Johmel Group, provides total
                    quality assurance and quality control services, corrosion
                    control services, training and manpower services to the oil
                    and gas industry, with strong clientele. <br /> <br /> The
                    Johmel Group has a global approach to its operations with
                    offices in Nigeria
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  {/* <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      MANAGEMENT PROFILE
                    </strong>{' '}
                    Our Director ENGR. JOHNSON ANYAMELE (MANAGING DIRECTOR /
                    CEO)
                  </span>
                </li>
              </ul>
              <p className='mt-8'>
                Metallurgical Engineering Graduate of Zhdanov Metallurgical
                Institute, Ukraine (former USSR). With a masters degree in
                metallurgical and Materials Science engineering. A Chartered
                Engineer, certified QMS lead auditor and NACE Coating Inspector
                Level 2, with vast knowledge in the oil/gas industry. <br />{' '}
                <br /> He has made publications in Engineering and Environmental
                issues, a member of various professional bodies amongst which
                are: COREN and Nigeria Society of Engineers Nigeria
                Metallurgical Association National Association Of Corrosion
                Engineers International etc. He joined the famous Project
                Development Institute (PRODA) in Enugu as a Senior Research
                Engineer in January 1989,. Where he contributed immensely to the
                development of science and technology. He handled most of MOBIL
                offshore contract and NOAC Brass tank work, which he
                successfully executed.
              </p>

              <div className='min-h-fit mt-5 gap-6 flex items-start justify-start'>
                <div className='bg-gray-100 dark:bg-gray-700 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform'>
                  <div className='flex items-center gap-4'>
                    <Image
                      src={director}
                      className='w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform'
                      width={300}
                      height={300}
                      alt=''
                    />
                    <div className='w-fit transition-all transform duration-500'>
                      <h1 className='text-gray-600 dark:text-gray-200 font-bold'>
                        ENGR. JOHNSON ANYAMELE
                      </h1>
                      <p className='text-gray-400'>MANAGING DIRECTOR / CEO</p>
                      <a className='text-xs text-gray-500 dark:text-gray-200 group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500'>
                        johnsonanyamele@johmel.org
                      </a>
                    </div>
                  </div>
                  <div className='absolute group-hover:bottom-1 delay-300 -bottom-16 transition-all duration-500 bg-gray-600 dark:bg-gray-100 right-1 rounded-lg'>
                    <div className='flex justify-evenly items-center gap-2 p-1 text-2xl text-white dark:text-gray-600'>
                      <svg
                        viewBox='0 0 1024 1024'
                        fill='currentColor'
                        height='1em'
                        width='1em'>
                        <path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z' />
                      </svg>
                      <svg
                        fill='currentColor'
                        viewBox='0 0 16 16'
                        height='1em'
                        width='1em'>
                        <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
                      </svg>
                      <svg
                        viewBox='0 0 960 1000'
                        fill='currentColor'
                        height='1em'
                        width='1em'>
                        <path d='M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98' />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
