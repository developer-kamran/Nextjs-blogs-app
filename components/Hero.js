import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='text-gray-600 body-font lg:px-20'>
      <div className='container mx-auto flex px-5 py-5 md:py-20 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            Explore the World of Programming with Us
          </h1>
          <p className='mb-8 leading-relaxed'>
            Welcome to Dev Blogs! We're here to share our passion for
            Programming with you. Our goal is to provide you with insightful,
            informative, and inspiring content to help you explore and grow in
            your interest. Join our community and let's learn and discover
            together!
          </p>
          <div className='flex justify-center'>
            <Link
              href='#blogs'
              className='inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg'
            >
              Show Blogs
            </Link>
            <Link
              href='https://developer-kamran.netlify.app'
              target='blank'
              className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'
            >
              Visit Potfolio
            </Link>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 '>
          <img
            className=' '
            alt='hero'
            src='./hero_bg.png'
            style={{
              width: '400px',
              margin: 'auto',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
