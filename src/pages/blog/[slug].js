import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
export default function PostPage({
  frontmatter: { title, date, category, author, job, comments, views },
  slug,
  content,
}) {
  return (
    <>
      <div className='p-10 py-0 md:p-12 lg:px-36 flex flex-col items-start'>
        <h2 className='sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4'>
          {title}
        </h2>
        <span className='title-font font-medium text-gray-500 mb-2'>
          {date}
        </span>

        <p
          className='leading-relaxed mb-8 mt-3 text-gray-900 '
          style={{ lineHeight: '1.8', fontSize: '1.05rem' }}
        >
          {content}
        </p>
        <div className='flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full'>
          <span className='inline-block py-1 px-2 rounded bg-pink-50 text-pink-500 text-xs font-medium tracking-widest'>
            {category}
          </span>
          <span className='text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 '>
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
            {views}
          </span>
          <span className='text-gray-400 inline-flex items-center leading-none text-sm '>
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
            {comments}
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
              {author}
            </span>
            <span className='text-gray-400 text-xs tracking-widest mt-0.5'>
              {job}
            </span>
          </span>
        </a>
        <Link
          href={'/'}
          className='inline-flex text-white bg-pink-400 border-0 py-2 px-5 my-8 focus:outline-none hover:bg-pink-500 rounded text-sm '
        >
          Go Back
        </Link>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map((file) => ({
    params: {
      slug: file.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const file = path.join('posts', `${slug}.md`);
  const result = fs.readFileSync(file, 'utf8');
  const { data: frontmatter, content } = matter(result);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
};
