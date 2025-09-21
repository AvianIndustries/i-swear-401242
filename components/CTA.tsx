import React from 'react';
import Link from 'next/link';

export const CTA = () => (
  <div className='py-20 bg-gray-900 text-center text-white'>
    <h2 className='text-3xl mb-6'>Ready to get started?</h2>
    <p className='mb-10'>Join us today and experience the difference.</p>
    <Link href='/signup'>
      <button className='px-5 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded'>Sign Up</button>
    </Link>
  </div>
);
