import React from 'react';
import { ScheduleItemType, Time } from './ScheduleItem';
import { EVENT_HEIGHT } from './constants';
import { ColumnPosition } from './ScheduleColumn';
// import image from '../../assets/AEJ.jpg'

function EventBlock({ scheduleItem, type, position }) {
  const duration = Time.timeDiff(scheduleItem.startTime, scheduleItem.endTime);

  // if (duration === 180) {
  //   return (
  //     <img src={image} alt="event" style={{
  //       height: `${duration * EVENT_HEIGHT}px`,
  //     }}
  //     className={`border-white border-b  ${type === ScheduleItemType.EVENT && 'bg-secondary-dark'} flex flex-col justify-center items-center text-white ${position === ColumnPosition.LEFT && 'border-l lg:border-r-0 border-r'} ${position === ColumnPosition.RIGHT && 'border-r lg:border-l-0 border-l'} ${position === ColumnPosition.MID && 'border-l border-r'}`}
  //     />
  //   )
  // }

  return (
    <div
      style={{
        height: `${duration * EVENT_HEIGHT}px`,
        backgroundColor: '',
      }}
      className={`border-white border-b  ${
        type === ScheduleItemType.EVENT && 'bg-secondary-dark'
      } flex flex-col justify-center items-center text-white ${
        position === ColumnPosition.LEFT && 'border-l lg:border-r-0 border-r'
      } ${
        position === ColumnPosition.RIGHT && 'border-r lg:border-l-0 border-l'
      } ${position === ColumnPosition.MID && 'border-l border-r'}`}
    >
      {type === ScheduleItemType.EVENT ? (
        <>
          {/* <h1>{scheduleItem.title}</h1>
      {scheduleItem.startTime.toString()} - {scheduleItem.endTime.toString()} */}
          <img
            style={{
              height: `${duration * EVENT_HEIGHT}px`,
              width: '100%',
              backgroundColor: '',
            }}
            src={scheduleItem.image}
            alt="event"
          />
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export default EventBlock;
