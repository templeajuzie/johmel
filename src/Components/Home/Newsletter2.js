const Newsletter2 = () => {
  return (
    <aside
      className='my-8 rounded-lg shadow-md px-6 md:flex flex-row align-middle justify-between md:px-16'
      aria-label='Subscribe to the Flowbite newsletter'>
      <div className='a'>
        <h3 className='mb-3 text-xl font-medium text-gray-900 dark:text-white'>
          Get more updates...
        </h3>
        <p className='mb-5 text-sm font-medium text-gray-500 dark:text-gray-300 lg:w-2/3'>
        Stay in the loop! Sign up for our newsletter to receive the latest updates, industry insights, and exclusive offers from our company.
        </p>
      </div>
      <div className='b'>
        <form>
          <div data-style='clean' className='flex items-end mb-3'>
            <div
              data-element='fields'
              data-stacked='false'
              className='flex items-center w-full max-w-md mb-3 seva-fields formkit-fields'>
              <div className='relative w-full mr-3 formkit-field'>
                <label
                  for='member_email'
                  className='hidden block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  Email address
                </label>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <svg
                    className='w-4 h-4 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
                  </svg>
                </div>
                <input
                  id='member_email'
                  className='formkit-input bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg w-full pl-10 p-2.5 placeholder-gray-40 '
                  name='email_address'
                  aria-label='Email Address'
                  placeholder='Your email address...'
                  required=''
                  type='email'
                />
              </div>
              <span className='px-5 py-3 text-sm font-medium text-center text-white bg-[#00a650dd] rounded-lg cursor-pointer'>
                Subscribe
              </span>
            </div>
          </div>
        </form>
        <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
          By subscribing, you agree with JOHMEL{' '}
          <a
            href='#'
            className='text-blue-600 underline dark:text-[#00a650dd]'>
            Terms of Service
          </a>{' '}
          and 
          <a
            className='text-blue-600 underline dark:text-[#00a650dd] ml-1'
            href='#'>
             Privacy Policy
          </a>
          .
        </div>
      </div>
    </aside>
  );
};

export default Newsletter2;
