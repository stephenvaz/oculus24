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

function LandingPage() {

  return (
    <div className="w-full flex flex-col !items-center !justify-center gap-2 overflow-x-clip">
      <Appear>
        <div className='h-screen z-[-999] w- flex items-center justify-center select-none'>
          <img
            src={logo}
            alt=""
            className='z-10 w-3/4 md:w-1/2 select-none'
          />
        </div>
      </Appear>
      {/* <TLeft>
        <img src={voyage} alt="" className='w-40 fixed top-0 left-0 z-[999]' />
      </TLeft> */}
      {/* <div className='h-screen w-full flex items-center justify-around'>
        <SlideLeft>
        <div style={{ backdropFilter: "blur(30px)" }} className='relative z-[900] w-full flex flex-col items-start justify-start gap-4 bg-white bg-opacity-10 p-5 rounded-xl text-justify pt-8'>
          <div className="text-lg font-extralight text-secondary-purple">
            {"Sardar Patel Institute of Technology is back with much more energy and enthusiasm with its 6th edition of the Annual Techno-Cultural Fest, OCULUS. The fest has a galore of events from hopping on to cultural events to brainstorming at the Technical ones and ending with the euphoric pronites. Oculus is aiming to make a significant difference in society by donating the proceeds from all events to support CRY, an esteemed NGO under the Oculus for a Cause initiative.".split("").map((child, idx) => (
              <span className='hoverText' key={idx}>
                {child}
              </span>
            ))}
          </div>
          <div className='absolute top-[-25px] left-[14px] text-white text-5xl font-bold'>
            ABOUT OCULUS
          </div>
        </div>
      </SlideLeft>
      <SlideRight>
        <ScrollComp />
      </SlideRight>
      </div>
      <div className='h-screen w-full flex items-center justify-center'>
        <ScrollComp />
      </div> */}
      <div className='w-full h-screen z-[100]'>
        <Center>
          <Shuffle />
        </Center>
      </div>
      <div className='h-screen w-full flex items-center justify-center'>
        <ScrollComp />
      </div>
    </div>
  );
}

export default LandingPage;
