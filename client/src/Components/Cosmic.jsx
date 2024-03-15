import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ScrollComp from "./scroll/ScrollComp";

const Cosmic = () => {
  return (
    <section className="w-full xl:px-0 px-8 py-12 flex md:flex-row flex-col items-center gap-8 max-w-7xl mx-auto z-[100]">
      <ScrollComp />
      <div style={{ backdropFilter: "blur(10px)" }} className="w-1/2 sw:w-full bg-opacity-[0.075] border-[0.25px] border-slate-600 bg-white p-4 rounded-xl ">
        <h3 className="grad text-4xl text-white lg:text-5xl md:text-4xl font-extrabold sm:pb-2 pb-1">
          The Cosmic Voyage
        </h3>
        <p className="text-base text-justify lg:text-lg md:text-base slm:text-sm text-white my-4 md:my-6">
        From travelling across the globe in 2022, The 5th edition of OCULUS is set to explore the land of dreams, Oculus - A Mumbai Saga, celebrating the essence of Mumbai. The infamous melting pot of cultures, with a touch of vibrant art and the diverse entertainment scene.
        </p>
      </div>
    </section>
  );
};

export default Cosmic;