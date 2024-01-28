import React from 'react';
import { Reveal, Tween, Controls, PlayState, ScrollTrigger } from 'react-gsap';
import './schedule.css';

const SchedulePage = () => {
  const parent_container = React.useRef(null);
  const years = [1935, 1949, 1950];
  const vh = (coef) => window.innerHeight * (coef / 100);

  function goto(section, i) {
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

  function initTimeline() {
    // let parent_container = document.getElementById('section-timeline');
    // let timeline_container = parent_container.current.querySelector(
    //   '.timeline-container'
    // );
    // var sections = timeline_container.querySelectorAll('.year');
    // let parentST = ScrollTrigger.create({
    //   id: 'parent-timeline',
    //   // trigger: parent_container,
    //   start: 'top top',
    //   toggleClass: 'started',
    //   pin: true,
    //   markers: true,
    //   end: () => '+=' + (sections.length - 1) * vh(80),
    // });
    // let currentSection;
    
    // sections.forEach((sct, i) => {
    //   let sct_index = sct.getAttribute('data-count');
    //   ScrollTrigger.create({
    //     start: () => parentST.start + i * window.innerHeight * 0.4,
    //     end: () => '+=' + window.innerHeight * 0.4,
    //     markers: true,
    //     onLeaveBack: () => i || goto(null, 0),
    //     onToggle: (self) => self.isActive && goto(sct, sct_index),
    //   });
    // });
  }

  initTimeline();

  return (
    <div className="h-full w-full">
      <main id="main">
        <header>
          <h1>
            <span>Day 1</span>
          </h1>
        </header>
        <ScrollTrigger
          start="top top"
          toggleClass="started"
          pin={true}
          markers={true}
          end={() => '+=' + (years.length - 1) * vh(80)}
        >
          <div
            id="section-timeline"
            class="section-timeline"
            ref={parent_container}
          >
            <div class="timeline-container">
              {years.map((sct, index) => {
                return (
                  <ScrollTrigger
                    // start={() => .start + i * window.innerHeight * 0.4}
                    end={() => '+=' + window.innerHeight * 0.4}
                    markers={true}
                    onLeaveBack={() => i || goto(null, 0)}
                    onToggle={(self) => self.isActive && goto(sct, (index + 1))}
                  >
                    <article
                      class={`year year-${index + 1}`}
                      data-count={index + 1}
                    >
                      <hgroup>
                        <h2>{year}</h2>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text.
                        </p>
                      </hgroup>
                    </article>
                  </ScrollTrigger>
                );
              })}
            </div>
          </div>
        </ScrollTrigger>
      </main>
    </div>
  );
};

export default SchedulePage;
