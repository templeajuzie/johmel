import Image from 'next/image';
import img1 from '../../../public/Resources/images/pic1.jpg';
import img2 from '../../../public/Resources/images/pic2.jpg';
import img3 from '../../../public/Resources/images/pic3.jpg';
import img4 from '../../../public/Resources/images/pic4.jpg';
import img5 from '../../../public/Resources/images/pic5.jpg';
import img6 from '../../../public/Resources/images/pic6.jpg';

const ServicesComp = () => {
  return (
    <div className='relative isolate overflow-hidden bg-white px-6 py-10 sm:py-10 lg:overflow-visible lg:px-16'>
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
        <div className='flex flex-col text-center w-full mb-2'>
          <h2 className='text-lg text-[#00A651] tracking-widest font-medium title-font mb-1'>
            Read Our Services
          </h2>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-black lg:px-48'>
            We have over 25 Years of experience, and have been certified by
            several industrial bodies.
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            Johmel Integrated services Limited have obtained certifications from
            multiple industry authorities, validating our capability to deliver
            our services, enabling us to deliver our services to our clients,
            provideing solution oriented, cost effective, responsive, high
            quality consultancy and projects management services in areas
            related to us.
          </p>
        </div>
      </div>

      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex py-24 md:flex-row flex-col'>
          <div className='w-full lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0'>
            <Image
              width={500}
              height={500}
              alt='hero'
              className='h-[500px] w-full object-cover rounded-lg'
              src={img1}
            />
          </div>

          <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center '>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              1. Maintenance Quality Management
            </h1>
            <p className='mb-8 leading-relaxed'>
              At Johmel we have expertise and the technical know-how to help our
              Clients in specialized Quality Maintenance, NDT, Pressure Testing
              etc. We developed a tailored offer of multi-disciplinary Technical
              Services in order to support our Client from the first concept
              phase up to the technical completion phase.
            </p>

            <ul class='list-disc text-black ml-4'>
              <li>Specialized NDT Services</li>
              <li>Eddy current Inspection</li>
              <li>Digital Radiography</li>
              <li>Tank inspection Services</li>
              <li>Plant Inspection Services</li>
              <li>API inspection Services</li>
              <li>Pressure Testing</li>
              <li>Rope Assess Manpower Supply and services</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex py-24 md:flex-row flex-col'>
          <div className='w-full lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0'>
            <Image
              width={500}
              height={500}
              alt='hero'
              className='h-[500px] w-full object-cover rounded-lg'
              src={img2}
            />
          </div>

          <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center '>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              2. Asset Integrity Management Services
            </h1>
            <p className='mb-8 leading-relaxed'>
              Johmel provides project complete Asset Integrity Management
              Services to support oil & gas, petrochemical, refinery and power
              projects. The extent of the support offered depends on the
              customer’s technical and administrative organization and may range
              from supplying specialized professionals for inclusion in the
              client’s team to supplying a complete Project Team. These services
              include:
            </p>

            <ul class='list-disc text-black ml-4'>
              <li>Risk Based Inspection</li>
              <li>Safety Integrity</li>
              <li>Fitness For Service</li>
              <li>Risk Assessment</li>
              <li>Corrosion Control & Coating Services</li>
              <li>
                Blasting and Painting of off-shore platforms, flow stations,
                Storage Tanks & Vessels
              </li>
              <li>Complete crude oil storage tank overhaul</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex py-24 md:flex-row flex-col'>
          <div className='w-full lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0'>
            <Image
              width={500}
              height={500}
              alt='hero'
              className='h-[500px] w-full object-cover rounded-lg'
              src={img3}
            />
          </div>

          <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center '>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              3. Engineering & Consulting
            </h1>
            <p className='mb-8 leading-relaxed'>
              At Johmel we have expertise and know-how to help our Clients in
              specialized design, detailed drawing preparation, technical
              reporting, consultancy during the construction phases. We
              developed a tailored offer of multi-disciplinary Engineering
              Services in order to support our Client from the first concept
              phase up to the technical completion phase.
            </p>

            <ul class='list-disc text-black ml-4'>
              <li>Piping, Layout Design and Stress Analysis</li>
              <li>Structural design (F.E.M. analysis) of structures</li>
              <li>Ex Area Classification</li>
              <li>Plant Automation and PLC Programming</li>
              <li>Technical Procedures</li>
              <li>O&M Manuals</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex py-24 md:flex-row flex-col'>
          <div className='w-full lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0'>
            <Image
              width={500}
              height={500}
              alt='hero'
              className='h-[500px] w-full object-cover rounded-lg'
              src={img4}
            />
          </div>

          <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center '>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              4. Technical Consultancy / Certification & Inspection Services
            </h1>
            <p className='mb-8 leading-relaxed'>
              At Johmel we strive to lead the industry in minimising the
              potential hazards of offshore marine work. Safety is by far the
              most important item on our sustainability agenda. Every hour of
              every day, we operate under conditions that are potentially
              dangerous if not managed correctly. Our experience, vigilant
              approach and strong safety culture have all contributed to our
              excellent safety record and we are constantly looking at how we
              can take safety to an even higher level.
            </p>

            <ul class='list-disc text-black ml-4'>
              <li>
                Certification And Accreditation of Quality Assurance System
              </li>
              <li>Pressure Equipment Inspection & Certification</li>
              <li>Statutory Third Party Inspection Services</li>
              <li>Facility Survey and Certification</li>
              <li>Plant Shutdown Inspection</li>
              <li>Welding inspection & Welder Qualification</li>
              <li>Painting, Coating & Corrosion inspection</li>
              <li>Calibration Services</li>
              <li>Hardness testing</li>
              <li>Hydro Testing</li>
              <li>Pipeline Pigging</li>
              <li>Lifting gears and appliances inspection</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex py-24 md:flex-row flex-col'>
          <div className='w-full lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0'>
            <Image
              width={500}
              height={500}
              alt='hero'
              className='h-[500px] w-full object-cover rounded-lg'
              src={img5}
            />
          </div>

          <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center '>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              5. Marine and Oil Support Services
            </h1>
            <p className='mb-8 leading-relaxed'>
              At Johmel we have expertise and know-how to support marine
              operations and activities with the fast delivery and supply of
              marine equipment. Our capabilities are related to consolidated
              know-how acquired during international projects within
              multi-ethnic teams. We operate worldwide in severe climatic
              conditions and challenging projects.
            </p>

            <ul class='list-disc text-black ml-4'>
              <li>Maintenance early assessment</li>
              <li>Derrick/Accommodation Barge</li>
              <li>500 – 900 HP Creek Push Tugs</li>
              <li>500 Ton Flat Top Barge</li>
              <li>500 Ton Water Barge</li>
              <li>Fast Crew Boats</li>
              <li>Charter Hire of AHTS/ OSV /PSV /MSV</li>
              <li>Anchor Handling Services</li>
              <li>Towing and Mooring of Offshore Vessels</li>
              <li>Vessel Assistance and Support Services</li>
              <li>Chartering of Offshore Accommodation Barges</li>
              <li>Chartering of Offshore Construction Heavy Lift Barges</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex py-24 md:flex-row flex-col'>
          <div className='w-full lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0'>
            <Image
              width={500}
              height={500}
              alt='hero'
              className='h-[500px] w-full object-cover rounded-lg'
              src={img6}
            />
          </div>

          <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center '>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              6. Turn Around, Maintenance & Upgrade
            </h1>
            <p className='mb-8 leading-relaxed'>
              At Johmel we have the expertise to support operations and
              maintenance / upgrade activities from early planning phase to
              field maintenance and business process re-engineering. Our
              capabilities are related to consolidated know-how acquired during
              international projects within multi-ethnic teams. We operate
              worldwide in severe climatic conditions and challenging projects.
            </p>

            <ul class='list-disc text-black ml-4'>
              <li>Maintenance early assessment</li>
              <li>Maintenance processes</li>
              <li>Preventative maintenance plans</li>
              <li>Planning, design and scheduling of maintenance work</li>
              <li>Operating instructions</li>
              <li>Implementation of Computerized Maintenance Systems (CMMS)</li>
              <li>Spare Parts assessment and optimization</li>
              <li>Predictive maintenance</li>
              <li>Maintenance reporting</li>
              <li>Audits and Quality Check</li>
              <li>Training</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesComp;
