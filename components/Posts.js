import React from 'react';
import Link from 'next/link';

const Posts = ({ posts }) => {
  return (
    <div className='p-10 sm:p-12 lg:px-36 flex flex-col items-start'>
      <span className='inline-block py-1 px-2 rounded bg-pink-50 text-pink-500 text-xs font-medium tracking-widest'>
        {posts.frontmatter.category}
      </span>

      <h2 className='sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4'>
        {posts.frontmatter.title}
      </h2>
      <span className='title-font font-medium text-gray-500 mb-2'>
        {posts.frontmatter.date}
      </span>

      <p className='leading-relaxed mb-8'>{posts.frontmatter.excerpt}</p>
      <div className='flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full'>
        <Link
          href={`/blog/${posts.slug}/`}
          className='text-pink-500 inline-flex items-center'
        >
          Read More
          <svg
            className='w-4 h-4 ml-2'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M5 12h14'></path>
            <path d='M12 5l7 7-7 7'></path>
          </svg>
        </Link>
        <span className='mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 text-pink-500'>
          <svg
            className='w-4 h-4 mr-1 '
            stroke='currentColor'
            strokeWidth='2'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            viewBox='0 0 24 24'
          >
            <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
            <circle cx='12' cy='12' r='3'></circle>
          </svg>
          {posts.frontmatter.views}
        </span>
        <span className='text-gray-400 inline-flex items-center leading-none text-sm text-pink-500'>
          <svg
            className='w-4 h-4 mr-1 '
            stroke='currentColor'
            strokeWidth='2'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            viewBox='0 0 24 24'
          >
            <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
          </svg>
          {posts.frontmatter.comments}
        </span>
      </div>
      <a className='inline-flex items-center'>
        <img
          alt='blog'
          src='https://dummyimage.com/104x104'
          className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
        />
        <span className='flex-grow flex flex-col pl-4'>
          <span className='title-font font-medium text-gray-900'>
            {posts.frontmatter.author}
          </span>
          <span className='text-gray-400 text-xs tracking-widest mt-0.5'>
            {posts.frontmatter.job}
          </span>
        </span>
      </a>
    </div>
  );
};

export default Posts;
