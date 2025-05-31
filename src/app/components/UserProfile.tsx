import Image from 'next/image';
import React from 'react';

export const UserProfile = () => (
  <div className='flex items-center space-x-4'>
    <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
    <Image
      src='/avatar.png'
      alt='Netflix'
      width={32}
      height={32}
      className='cursor-pointer rounded'
    />
  </div>
);
