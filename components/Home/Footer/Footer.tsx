import React from 'react';
import { LuNetwork } from 'react-icons/lu';

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-200 dark:bg-gray-900'>
      <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 items-start'>
        {/* 1st part  */}
        <div>
          {/* Logo  */}
          <div>
            <div className='w-10 h-10 bg-cyan-800 dark:bg-white rounded-full flex items-center justify-center flex-col'>
              <LuNetwork className='w-5 h-5 text-white dark:text-black' />
            </div>
            <h1 className='text-xl mt-2 text-cyan-800 dark:text-white font-bold'>
              GrébéHire
            </h1>
            <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              quam voluptatum numquam pariatur! Sint dignissimos.
            </p>
            {/* call  */}
            <div className='mt-5'>
              <h1 className='lg:text-lg text-base text-gray-700 dark:text-gray-300 font-medium'>
                Call us
              </h1>
              <p className='mt-1 text-gray-600 dark:text-gray-300 lg:text-lg text-base font-bold'>
                +212 6 84 420 760
              </p>
            </div>
            {/* address  */}
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-4'>
              Grébé Yvan
            </p>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-2'>
              Grébé Yvan Casablanca Maroc
            </p>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-2'>
              yvan.grebe@gmail.com
            </p>
          </div>
        </div>
        {/* 2nd part  */}
        <div className='space-y-6'>
          <h1 className='text-lg font-bold text-gray-800 dark:text-gray-200'>
            For Candidates
          </h1>
          <p className='text-gray-600 dark:text-gray-400 text-sm cursor-pointer w-fit hover:text-sky-700'>
            Browse Jobs
          </p>
          <p className='text-gray-600 dark:text-gray-400 text-sm cursor-pointer w-fit hover:text-sky-700'>
            Browse Categories
          </p>
          <p className='text-gray-600 dark:text-gray-400 text-sm cursor-pointer w-fit hover:text-sky-700'>
            Candidate Dashboard
          </p>
          <p className='text-gray-600 dark:text-gray-400 text-sm cursor-pointer w-fit hover:text-sky-700'>
            Job Alerts
          </p>
          <p className='text-gray-600 dark:text-gray-400 text-sm cursor-pointer w-fit hover:text-sky-700'>
            My Bookmarks
          </p>
        </div>
        {/* 3rd part  */}
        <div className='space-y-6'>
          <h1 className='text-lg font-bold text-gray-800 dark:text-gray-200'>
            For Employers
          </h1>
          <p className='text-gray-600 dark:text-gray-400 text-sm cursor-pointer w-fit hover:text-sky-700'>
            Browse Candidates
          </p>
          <p className='text-gray-600 dark:text-gray-400 text-sm cursor-pointer w-fit hover:text-sky-700'>
            Employer Dashboard
          </p>
          <p className='text-gray-600 dark:text-gray-400 text-sm cursor-pointer w-fit hover:text-sky-700'>
            Add Job
          </p>
          <p className='text-gray-600 dark:text-gray-400 text-sm cursor-pointer w-fit hover:text-sky-700'>
            Job Packages
          </p>
        </div>
        {/* 4th part  */}
        <div className='space-y-6'>
          <h1 className='text-lg font-bold text-gray-800 dark:text-gray-200'>
            About Us
          </h1>
          <p className='text-gray-600 dark:text-gray-400 text-sm cursor-pointer w-fit hover:text-sky-700'>
            Job page
          </p>
          <p className='text-gray-600 dark:text-gray-400 text-sm cursor-pointer w-fit hover:text-sky-700'>
            Job Page Alternative
          </p>
          <p className='text-gray-600 dark:text-gray-400 text-sm cursor-pointer w-fit hover:text-sky-700'>
            Resume Page
          </p>
          <p className='text-gray-600 dark:text-gray-400 text-sm cursor-pointer w-fit hover:text-sky-700'>
            Blog
          </p>
          <p className='text-gray-600 dark:text-gray-400 text-sm cursor-pointer w-fit hover:text-sky-700'>
            Contact
          </p>
        </div>
        {/* 5th part  */}
        <div className='space-y-6'>
          <h1 className='text-lg font-bold text-gray-800 dark:text-gray-200'>
            Helpful Resources
          </h1>
          <p className='text-gray-600 dark:text-gray-400 text-sm cursor-pointer w-fit hover:text-sky-700'>
            Site Map
          </p>
          <p className='text-gray-600 dark:text-gray-400 text-sm cursor-pointer w-fit hover:text-sky-700'>
            Terms of Use
          </p>
          <p className='text-gray-600 dark:text-gray-400 text-sm cursor-pointer w-fit hover:text-sky-700'>
            Privacy Center
          </p>
          <p className='text-gray-600 dark:text-gray-400 text-sm cursor-pointer w-fit hover:text-sky-700'>
            Security Center
          </p>
          <p className='text-gray-600 dark:text-gray-400 text-sm cursor-pointer w-fit hover:text-sky-700'>
            Accessibility Center
          </p>
        </div>
      </div>
      <div className='pt-6 mt-10 border-t w-[90%] mx-auto border-gray-300 dark:border-gray-800 '>
        <p className='text-gray-600'>
          © 2023 GrébéHire. All rights reserved. Made with{' '}
          <span className='text-red-500'>❤️</span> by Grébé Yvan
        </p>
      </div>
    </div>
  );
};

export default Footer;
