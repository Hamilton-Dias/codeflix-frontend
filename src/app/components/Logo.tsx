import Image from 'next/image';
import React from 'react';

export const Logo = () => (
  <Image
    src='/logo.png'
    alt='Netflix'
    width={90}
    height={90}
    className='cursor-pointer'
  />
);
