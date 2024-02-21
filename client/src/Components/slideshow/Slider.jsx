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
        <div className="slideshow">
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
