import React, { useRef, useEffect } from 'react';
import LandingData from './landing';
import space from '../assets/space.png'
import Appear from '../animated-components/Appear';
import logo from '../assets/Full White.png'
import ScrollComp from '../Components/scroll/ScrollComp';
import voyage from '../assets/cosmic voyage white (stroked).png';
import Center from '../animated-components/Center';
import TLeft from '../animated-components/TLeft';

function LandingPage() {

  return (
    <div className="w-full flex flex-col !items-center !justify-center gap-2">
      <Appear>
        <div className='h-screen z-[-999] w- flex items-center justify-center select-none'>
          <img
            src={logo}
            alt=""
            className='z-10 w-3/4 md:w-1/2 select-none'
          />
        </div>
      </Appear>
      <TLeft>
        <img src={voyage} alt="" className='w-40 fixed top-0 left-0 z-[999]' />
      </TLeft>
      <div className='h-screen w-full flex items-center justify-around'>
        <div className='z-[1000] w-1/2 flex flex-col items-start justify-start gap-4'>
          <h2 className="text-5xl font-thin text-indigo">
            {"About Oculus".split("").map((child, idx) => (
              <span className='hoverText' key={idx}>
                {child}
              </span>
            ))}
          </h2>
          <div className='w-full text-white text-justiy'>
            Sardar Patel Institute of Technology is back with much more energy and enthusiasm with its 6th edition of the Annual Techno-Cultural Fest, OCULUS. The fest has a galore of events from hopping on to cultural events to brainstorming at the Technical ones and ending with the euphoric pronites. Oculus is aiming to make a significant difference in society by donating the proceeds from all events to support CRY, an esteemed NGO under the Oculus for a Cause initiative.
          </div>
        </div>
        <ScrollComp />
      </div>
      <div className='h-screen w-full flex items-center justify-center'>
        <ScrollComp />
      </div>
    </div>
  );
}

export default LandingPage;
