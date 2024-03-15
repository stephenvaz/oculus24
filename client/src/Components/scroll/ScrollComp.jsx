import React from 'react';
import { motion } from 'framer-motion';
import testimg from './images/1.jpg';
import Slider from '../slideshow/Slider';
import Sl from '../../animated-components/Sl';

const ScrollComp = () => {
    return (
        <div className='w-1/2 sw:w-full sm:flex sm:justify-center'>
            <Box image={testimg} />
        </div>
    );
};

function Box({ image }) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                // exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 1, delay: 0.5}}
                className='w-full flex items-center justify-center'
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
                <Sl>
                <Slider />
                </Sl>
            </motion.div>
        </>
    )
}

export default ScrollComp;
