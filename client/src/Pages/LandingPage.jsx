import React from 'react';
import Appear from '../animated-components/Appear';
import Center from '../animated-components/Center';
import Shuffle from '../Components/Shuffle';
import Cosmic from '../Components/Cosmic';
import Spline from "@splinetool/react-spline"; 

function LandingPage() {
  return (
    <div className="w-full flex flex-col !items-center !justify-center gap-2 overflow-x-clip">
      <Appear>
        <div className='h-screen z-[-999] flex items-center justify-center select-none'>
          {/* <img
            src={logo}
            alt=""
            className='z-10 w-3/4 md:w-1/2 select-none'
          /> */}
          <Spline
            scene="https://prod.spline.design/oNjfXSplRKV2iLcL/scene.splinecode"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 20,
              zIndex: 3,
            }}
          />
        </div>
      </Appear>
      <div className='w-full h-screen max-sm:h-full x2s:h-full x1s:h-full flex items-start justify-center z-[100]'>
        <Center>
          <Shuffle />
        </Center>
      </div>
      <div className='w-full h-screen max-sm:h-full x2s:h-full x1s:h-full flex items-start justify-center z-[100]'>
        <Center>
          <Cosmic />
        </Center>
      </div>
      <div className='w-full  h-screen x2s:h-full x2s:mb-16 x1s:h-full x1s:mb-16 z-[100] flex flex-col items-center justify-start gap-20'>
        <div className='grad text-5xl sw:text-4xl font-bold text-center px-2'>
          Have a look at our last year's aftermovie
        </div>
        <div className='relative box-e lg:w-1/2 lg:h-[50%] md:w-3/4 md:h-1/2 sm:w-3/4 sm:h-[40%] max-sm:w-3/4 max-sm:h-1/4'>
          <iframe
            className='relative w-full h-full'
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
    </div>
  );
}

export default LandingPage;
