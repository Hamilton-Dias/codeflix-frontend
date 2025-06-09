'use client';

import React, { useEffect } from 'react';

export default function Error({ error, reset }: any) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='text-red-500'>
      <h1 className='text-1xl font-bold'>Error page</h1>
      <div className=''>Something went wrong</div>
    </div>
  );
}
