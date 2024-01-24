import React, { useRef, useEffect } from 'react';
import LandingData from './landing';
import space from '../assets/space.png'
import './landing.scss';
import Appear from '../animated-components/Appear';
import logo from '../assets/Full White.png'

function LandingPage() {

  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-2">
      <Appear>
        <img 
        src={logo} 
        alt=""
        className='fixed z-50 h-80 object-contain object-center px-8'
        style={{
          filter: 'drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.75))',
          top: '168px',
          height: '320px'
        }} 
        />
        </Appear>
      {/* <div className='w-full h-full flex flex-col items-center justify-center'>
        <div
        style={{
          // upside down
          transform: 'rotate(180deg)',
        }} 
        className='holo'></div>
        <div className='card'></div>
        <div className='holo'></div>
      </div> */}
    </div>
  );
}

export default LandingPage;
