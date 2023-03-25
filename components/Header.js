import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='text-gray-600 body-font px-20'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <nav className='flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto hidden md:block'>
          <Link href='/' className='mr-5 hover:text-gray-900'>
            Home
          </Link>
          <Link href='#' className='mr-5 hover:text-gray-900'>
            About
          </Link>
          <Link href='#blogs' className='mr-5 hover:text-gray-900'>
            Blogs
          </Link>
        </nav>
        <Link
          href='/'
          className='flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-10 h-10 text-white p-2 bg-pink-500 rounded-full'
            viewBox='0 0 24 24'
          >
            <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
          </svg>
          <span className='ml-3 text-xl'>Dev Blogs</span>
        </Link>
        <div className='lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0'>
          <button className=' items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 hidden md:inline-flex'>
            Signup
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-4 h-4 ml-1'
              viewBox='0 0 24 24'
            >
              <path d='M5 12h14M12 5l7 7-7 7'></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
