import React from "react";
import Appear from "../animated-components/Appear";
import Center from "../animated-components/Center";
import Shuffle from "../Components/Shuffle";
import Cosmic from "../Components/Cosmic";
import Spline from "@splinetool/react-spline";

function LandingPage() {
  return (
    <div className="w-full flex flex-col !justify-center gap-2 overflow-x-clip">
      <Appear>
        <div className='h-screen z-[999] relative flex items-center justify-center select-none'>
          {/* 
          backup scene link
          scene="https://prod.spline.design/P2d1xXGfY9MX-KmA/scene.splinecode" 
           */}
          <div className="relative w-full h-full">
            <Spline
              scene="https://prod.spline.design/mQ1M6KDQ3-WXDnnc/scene.splinecode"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 20,
                zIndex: 3,
              }}
              className="logo-md:hidden"
            />
            <Spline
              scene="https://prod.spline.design/TZHTav7XU5hIR3uT/scene.splinecode"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 20,
                zIndex: 3,
              }}
              className="md:hidden"
            />
            {/* <span
            style={{
              top: "75%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }} 
            className="absolute z-[1001] text-white text-xl text-opacity-40 font-bold">
              Do not hover over the planet!
            </span> */}
          </div>
        </div>
      </Appear>
      <div className='w-full h-screen max-sm:h-full x2s:h-full x1s:h-full flex items-start justify-center z-[100]'>
        <Center>
          <Shuffle />
        </Center>
      </div>
      <div className="w-full h-screen max-sm:h-full x2s:h-full x1s:h-full flex items-start justify-center z-[100]">
        <Center>
          <Cosmic />
        </Center>
      </div>
      <div className="w-full  h-screen x2s:h-full x2s:mb-16 x1s:h-full x1s:mb-16 z-[100] flex flex-col items-center justify-start gap-20">
        <div className="grad text-5xl sw:text-4xl font-bold text-center px-2">
          Have a look at our last year's aftermovie
        </div>
        <div className='relative box-e lg:w-1/2 lg:h-[60%] md:w-3/4 md:h-1/2 sm:w-3/4 sm:h-[40%] max-sm:w-3/4 max-sm:h-1/4'>
          <iframe
            className="relative w-full h-full"
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
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
