import React, { useState, useEffect } from 'react'

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [selected, setSelected] = useState('All');
  // useEffect(() => {
  //   console.log(selected);
  // },[selected]);
  return (
    <div className='h-full w-full py-28 x-container'>
      <h1 className='text-5xl neon font-bold mb-7'>Events</h1>
      <div className='flex flex-row gap-4 flex-wrap'>
        <button className='custom-btn btn-9' onClick={ () => setSelected('All')}>All</button>
        <button className='custom-btn btn-9' onClick={() =>setSelected('Pre - Events')}>Pre - Events</button>
        <button className='custom-btn btn-9' onClick={() =>setSelected('Technical')}>Technical</button>
        <button className='custom-btn btn-9' onClick={() =>setSelected('Fun')}>Fun</button>
        <button className='custom-btn btn-9' onClick={() =>setSelected('Cultural')}>Cultural</button>
      </div>
    </div>
  )
}

export default EventsPage