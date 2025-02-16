import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function Sl({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        // console.log("isInView", isInView);
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
        else {
            mainControls.start("hidden");
            slideControls.start("hidden");
        }
    }, [isInView, mainControls, slideControls]);

    return (
        <div
            //   ref={ref}
            style={{
                position: "relative",
                width: "fit-content",
                // overflow: "hidden",
                // height: '100%',
                zIndex: 1000
            }}
        >
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        // x: -200,
                        // y: 200,
                    },
                    visible: {
                        opacity: 1,
                        // x: 0,
                        // y: 0,
                    },
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.25,
                    ease: 'easeIn',
                }}
                initial="hidden"
                animate="visible"
            >
                {children}
            </motion.div>
            <motion.div
                style={{
                    position: "absolute",
                    // top: 16,
                    // left: 16,
                    zIndex: -1,
                    width: "100%",
                    height: "100%",
                    backdropFilter: "blur(5px)",
                    // media query for screen size
                }}
                className="border-2 border-slate-700 bg-secondary-purple bg-opacity-25 left-4 top-4 x1s:left-2 x1s:top-2"
                variants={{
                    hidden: {
                        opacity: 0,
                        x: 200,
                    },
                    visible: {
                        opacity: 1,
                        x: 0,
                    },
                }}
                transition={{
                    duration: 0.75,
                    delay: 0.2,
                    ease: 'easeInOut',
                }}
            // initial="hidden"
            // animate={slideControls}
            // animate="visible"
            />
        </div>
    );
}

export default Sl;