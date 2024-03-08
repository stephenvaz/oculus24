import React, { useRef, useEffect } from 'react';
import LandingData from './landing';
import space from '../assets/space.png'
import Appear from '../animated-components/Appear';
import logo from '../assets/Full White.png'
import ScrollComp from '../Components/scroll/ScrollComp';
import voyage from '../assets/cosmic voyage white (stroked).png';
import Center from '../animated-components/Center';
import TLeft from '../animated-components/TLeft';
import SlideLeft from '../animated-components/SlideLeft';
import SlideRight from '../animated-components/SlideRight';
import Shuffle from '../Components/Shuffle';
import Cosmic from '../Components/Cosmic';

function LandingPage() {

  return (
    <div className="w-full flex flex-col !items-center !justify-center gap-2 overflow-x-clip">
      <Appear>
        <div className='h-screen z-[-999] flex items-center justify-center select-none'>
          <img
            src={logo}
            alt=""
            className='z-10 w-3/4 md:w-1/2 select-none'
          />
        </div>
      </Appear>
      <div className='w-full h-[90vh] flex items-start justify-center z-[100]'>
        <Center>
          <Shuffle />
        </Center>
      </div>
      <div className='w-full h-[90vh] flex items-start justify-center z-[100]'>
        <Center>
          <Cosmic />
        </Center>
      </div>
      <div className='w-full h-[75vh] z-[100] flex items-start justify-center'>
        <div className='relative'>
          <div className='h-2 bg-secondary-purple w-1/2 absolute top-8'>
          </div>
          <iframe
            className='relative'
            width="500"
            height="350"
            src="https://www.youtube.com/embed/Oflbho9ZG2U?start=103"
            title="YouTube video player"
            frameborder="5"
            allow="accelerometer; 
  autoplay; 
  clipboard-write; 
  encrypted-media; 
  gyroscope; 
  picture-in-picture; 
  web-share" allowfullscreen>
          </iframe>
        </div>
      </div>
      {/* <div className='h-screen w-full flex items-center justify-center'>
        <ScrollComp />
      </div> */}
    </div>
  );
}

export default LandingPage;
