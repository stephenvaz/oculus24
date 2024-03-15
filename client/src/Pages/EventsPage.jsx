import React, { useState, useEffect } from 'react';
import EventCard from '../Components/EventCard.jsx';
import { AnimatePresence } from 'framer-motion';
import allEvents from '../events.json'

const EventsPage = () => {
  const [selected, setSelected] = useState('All');
  const [filteredEvents, setFilteredEvents] = useState(allEvents);

  useEffect(() => {
    if (selected === 'All') {
      setFilteredEvents(allEvents);
    } else {
      const filteredEvents = allEvents.filter((event) => event.category.includes(selected));
      setFilteredEvents(filteredEvents);
    }
  }, [selected]);

  return (
    <AnimatePresence>
      <div className='w-full pt-24 pb-16 x-container'>
        <h1 className='text-5xl grad font-bold mb-7'>Events</h1>
        <div className='flex flex-row gap-4 flex-wrap mb-6'>
          <button
            className={`custom-btn btn-9 ${selected === 'All' ? 'selected' : ''}`}
            onClick={() => setSelected('All')}
          >
            All
          </button>
          <button
            className={`custom-btn btn-9 ${selected === 'Pre - Event' ? 'selected' : ''}`}
            onClick={() => setSelected('Pre - Event')}
          >
            Pre - Events
          </button>
          <button
            className={`custom-btn btn-9 ${selected === 'Technical' ? 'selected' : ''}`}
            onClick={() => setSelected('Technical')}
          >
            Technical
          </button>
          <button
            className={`custom-btn btn-9 ${selected === 'Fun' ? 'selected' : ''}`}
            onClick={() => setSelected('Fun')}
          >
            Fun
          </button>
          <button
            className={`custom-btn btn-9 ${selected === 'Cultural' ? 'selected' : ''}`}
            onClick={() => setSelected('Cultural')}
          >
            Cultural
          </button>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
          {filteredEvents.map((event, index) => {
            return <EventCard key={index} event={event} />;
          })}
        </div>
      </div>
    </AnimatePresence >
  );
};

export default EventsPage;
