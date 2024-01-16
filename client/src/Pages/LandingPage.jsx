import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LandingData from './landing';
import './landing.css';
function LandingPage() {
  const galleryBoxRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: galleryBoxRef.current,
        // start: "top center-=200px",
        // end: "bottom+=3000px center-=200px ",
        // i want a start end such that the gallery_box_outer is always in the center of the screen
        start: "top 50%",
        end: "bottom 50%",

        scrub: true,
        pin: true,
        markers: true,
      },
    });

    tl.to('.gallery_box_outer', {
      duration: 10,
      rotateY: 360,
      ease: "none",
    });
  }, []);

  return (
    <div className="work2">
      <div className="gallery_box" ref={galleryBoxRef}
      >
        <div className="gallery_box_outer">
          {LandingData.map((tile, index) => (
            <div key={tile.id} className="gallery_box_in" style={{
              backgroundImage: `url(${tile.image})`,
              transform: `rotateY(${index * 60}deg) translateZ(450px)`,
            }}>
              <a href={tile.href}>
                <img src={tile.image} alt={tile.altText} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
