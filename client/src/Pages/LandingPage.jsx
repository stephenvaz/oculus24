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
      <div className='w-full h-screen flex items-start justify-center z-[100]'>
        <Center>
          <Shuffle />
        </Center>
      </div>
      <div className='w-full h-screen flex items-start justify-center z-[100]'>
        <Center>
          <Cosmic />
        </Center>
      </div>
      <div className='w-full h-screen z-[100] flex flex-col items-center justify-start gap-20'>
        <div className='grad text-5xl font-bold'>
          Have a look at our last year's aftermovie
        </div>
        <div className='relative'>
          <div className='grad-border h-[5px] w-1/2 absolute top-[-4%]'>
          </div>
          <div className='grad-border h-[5px] w-1/5 absolute top-[-4%] right-[-1.6%]'>
          </div>
          <div className='grad-border h-[5px] w-1/5 rotate-90 absolute top-[14%] right-[-11.3%]'>
          </div>
          <div className='grad-border h-[5px] w-1/2 absolute bottom-[-4%] right-0'>
          </div>
          <div className='grad-border h-[5px] w-1/5 absolute bottom-[-4%] left-[-1.5%]'>
          </div>
          <div className='grad-border h-[5px] w-1/5 rotate-90 absolute bottom-[14%] left-[-11.2%]'>
          </div>
          <iframe
            className='relative'
            width="800"
            height="450"
            src="https://www.youtube.com/embed/W8asaoyvgNY?si=JVf-qfKw7MEdxDrh"
            title="YouTube video player"
            frameborder="5"
            allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture; 
                    web-share" 
            allowfullscreen>
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
