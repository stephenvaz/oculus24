import React, { useEffect } from 'react';
import { Reveal, Tween, Controls, PlayState } from 'react-gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './schedule.css';
import { gsap } from 'gsap';

const SchedulePage = () => {
  const PC_ref = React.useRef(null);
  useEffect(() => {
    function initTimeline() {
      let parent_container = PC_ref.current;
      // let parent_container = document.getElementById('section-timeline');
      let timeline_container = parent_container.querySelector(
        '.timeline-container'
      );
      var sections = timeline_container.querySelectorAll('.year');
      const vh = (coef) => window.innerHeight * (coef / 100);

      let parentST = ScrollTrigger.create({
        id: 'parent-timeline',
        trigger: parent_container,
        start: 'top top',
        toggleClass: 'started',
        pin: true,
        // markers: true,
        end: () => '+=' + (sections.length - 1) * vh(80),
      });

      let currentSection=null;

      function goto(section, i) {
        if (currentSection == null) {
          currentSection = section[3];

        }
        if (currentSection !== section) {
          // if the section is the currentSection, skip
          // move the container
          gsap.to(timeline_container, {
            y: -48 * i,
            duration: 0.6,
            overwrite: true,
          });
          let tl = gsap.timeline({ defaults: { overwrite: true } });
          // animate OUT the current section (if there is one)
          if (currentSection) {
            tl.to(currentSection.querySelector('h2'), {
              fontSize: '2rem',
            });
            tl.to(
              currentSection,
              {
                maxHeight: '3rem',
              },
              0
            );
            tl.to(
              currentSection.querySelectorAll('p'),
              {
                opacity: 0,
                duration: 0.25,
                maxHeight: '0%',
              },
              0
            );
          }
          currentSection = section;
          // animate IN the new section (if there is one)
          if (section) {
            tl.to(
              section.querySelector('h2'),
              {
                fontSize: '10rem',
              },
              0
            );
            tl.to(
              section,
              {
                maxHeight: '80vh',
              },
              0
            );
            tl.fromTo(
              section.querySelectorAll('p'),
              { maxHeight: '0%' },
              {
                opacity: 1,
                maxHeight: '100%',
              }
            );
          }
        }
      }

      sections.forEach((sct, i) => {
        let sct_index = sct.getAttribute('data-count');

        ScrollTrigger.create({
          start: () => parentST.start + i * window.innerHeight * 0.4,
          end: () => '+=' + window.innerHeight * 0.4,
          // markers: true,
          onLeaveBack: () => i || goto(null, 0),
          onToggle: (self) => self.isActive && goto(sct, sct_index),
        });
      });
    }

    initTimeline();
  },[]);

  return (
    <div className=" " style={{zIndex:1200}}>
      <main id="main">
        <header>
          <h1>
            <span>Day 1</span>
          </h1>
        </header>

        <div id="section-timeline" className="section-timeline" ref={PC_ref}>
          <div className="timeline-container z-40">
            <article className="year year-1" data-count="1">
              <hgroup>
                <h2>Event 1</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </p>
              </hgroup>
            </article>
            <article className="year year-2" data-count="2">
              <hgroup>
                <h2>Event 2</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </p>
              </hgroup>
            </article>
            <article className="year year-3" data-count="3">
              <hgroup>
                <h2>Event 3</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text
                </p>
              </hgroup>
            </article>
            <article className="year year-4" data-count="4">
              <hgroup>
                <h2>Event 4</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text
                </p>
              </hgroup>
            </article>
           
          </div>
        </div>
      </main>
    </div>
  );
};

export default SchedulePage;
