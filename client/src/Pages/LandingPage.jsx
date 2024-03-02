import React, { useRef, useEffect } from "react";
import LandingData from "./landing";
import space from "../assets/space.png";
import Appear from "../animated-components/Appear";
import logo from "../assets/Full White.png";
import ScrollComp from "../Components/scroll/ScrollComp";
import voyage from "../assets/cosmic voyage white (stroked).png";
import Center from "../animated-components/Center";
import TLeft from "../animated-components/TLeft";
import Shuffle from "../Components/Shuffle";
import Spline from "@splinetool/react-spline";

function LandingPage() {
  return (
    <div className="w-full flex flex-col  gap-2 ">
      <Appear>
        <div className="h-screen z-[-999] w- flex items-center justify-center select-none">
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
      {/* <TLeft>
        <img src={voyage} alt="" className='w-40 fixed top-0 left-0 z-[999]' />
      </TLeft> */}
      {/* <div className='h-screen w-full flex items-center justify-center'>
        <ScrollComp />
      </div>
      <div className='h-screen w-full flex items-center justify-center'>
        <ScrollComp />
      </div> */}
      <div className="h-screen w-full flex items-center justify-center mt-4">
        <Center>
          <Shuffle />
        </Center>
      </div>
    </div>
  );
}

export default LandingPage;
