import React from "react";
import Lottie from "lottie-react";
import loader from "../assets/loader.json";

function SponsorsPage() {
  return (
    <>
    
    <div className="text-white text-5xl max-md:text-4xl mt-20 font-bold grad w-full text-center max-md:mt-16">
        Sponsors
      </div>
    <div className="h-full w-full flex flex-col items-center justify-center">
      
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <Lottie
          loop={true}
          animationData={loader}
          style={{ width: "90%", height: "auto", paddingLeft: "10%"}}
        />
      </div>
      <div className=" pb-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl neon font-bold mb-7">
          Coming Soon
        </h1>
      </div>
    </div>
    </>
  );
}

export default SponsorsPage;
