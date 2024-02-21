import React from 'react';
import { motion } from 'framer-motion';
import testimg from './images/1.jpg';
import Slider from '../slideshow/Slider';

const ScrollComp = () => {
    return (
        <div>
            {/* <Box image={testimg} /> */}
            <Box image={testimg} />
        </div>
    );
};

function Box({ image }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            // exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1 }}
        >
            {/* Adjusted image styling */}
            {/* <div>
                <img
                    className='relative sm:h-[500px]'
                    src={image}
                    alt=""
                />
            </div> */}
            {/* <div> */}
            <Slider />
            {/* </div> */}
            <div
                style={{
                    zIndex: 999,
                    position: 'absolute',
                    transform: 'translate(160%, -480%)',
                }}
                className='font-bold text-6xl text-white'>
                #001
            </div>
            <h2 className="text-center text-5xl font-thin text-indigo">
                {"Bubbbbbbbble text".split("").map((child, idx) => (
                    <span className='hoverText' key={idx}>
                        {child}
                    </span>
                ))}
            </h2>
        </motion.div>
    )
}

export default ScrollComp;
