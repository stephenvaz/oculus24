import React from 'react';
import Lottie from "lottie-react";
import loader from  "../assets/loader.json";

function SponsorsPage() {
  return (
    <div className='h-full w-full flex flex-col pt-20 items-center justify-center'>
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <Lottie loop={true} animationData={loader} style={{width: '100%', height: 'auto'}} />
      </div>
      <div className="p-4 pb-24 text-center">
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl neon font-bold mb-7'>Coming Soon</h1>
      </div>
    </div>
  );
}

export default SponsorsPage;
