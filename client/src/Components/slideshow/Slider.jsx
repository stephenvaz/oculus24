import React, { useState, useEffect, useRef } from "react";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import './Slider.css';

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function Slider() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, delay);

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow xl:w-[550px] xl:h-[400px] lg:w-[450px] lg:h-[300px] md:w-[400px] md:h-[300px] slm:w-[350px] slm:h-[250px] sm:w-[500px] sm:h-[350px] x2s:w-[420px] x2s:h-[250px] x1s:w-[300px] x1s:h-[250px]">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((backgroundColor, i) => (
                    <div
                        className="slide"
                        key={i}
                        style={{
                            backgroundColor: backgroundColor,
                            background: `url(${img1})`,
                        }}
                    >
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Slider;
