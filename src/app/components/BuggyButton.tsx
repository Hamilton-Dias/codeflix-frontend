'use client';

import React, { useState } from 'react';

export default function BuggyButton() {
  const [clicked, setClicked] = useState(false);

  if (clicked) {
    throw new Error('Something went wrong');
  }

  return (
    <button
      className='rounded-md bg-red-500 px-4 py-2 font-bold text-white'
      onClick={() => {
        setClicked(true);
      }}
    >
      Trigger Error
    </button>
  );
}
