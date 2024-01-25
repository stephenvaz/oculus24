import React, { useRef, useEffect } from 'react';
import LandingData from './landing';
import space from '../assets/space.png'
import Appear from '../animated-components/Appear';
import logo from '../assets/Full White.png'

function LandingPage() {

  return (
    <div className="h-full w-full flex flex-col !items-center !justify-center gap-2">
      <Appear>
      <div className='w-full flex items-center justify-center'>
        <img 
        src={logo} 
        alt=""
        className='z-10 w-3/4 md:w-1/2' 
        />
      </div>
        </Appear>
    </div>
  );
}

export default LandingPage;
