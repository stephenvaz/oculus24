import React, { useRef, useEffect } from 'react';
import LandingData from './landing';
import space from '../assets/space.png'
import './landing.scss';

function LandingPage() {

  return (
    <div className="h-full w-full flex flex-col items-center gap-2">
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <div
        style={{
          // upside down
          transform: 'rotate(180deg)',
        }} 
        className='holo'></div>
        <div className='card'></div>
        <div className='holo'></div>
      </div>
    </div>
  );
}

export default LandingPage;
