import React from 'react';
import {
  PeriodType,
  ScheduleItem,
  ScheduleItemType,
  Time,
} from './ScheduleItem';
import EventBlock from './EventBlock';
import FillerBlock from './FillerBlock';

const fillTimeSlots = (scheduleItems, startTime, endTime) => {
  // scheduleItems = [
  //   new ScheduleItem('VSM', new Time(10, 0), new Time(11, 0)),
  //   new ScheduleItem('Break', new Time(11, 0), new Time(11, 30)),
  //   new ScheduleItem('Technical', new Time(11, 30), new Time(12, 30 )),
  //   new ScheduleItem('Lunch', new Time(12, 30), new Time(13, 30)),
  //   new ScheduleItem('Fun', new Time(13, 30), new Time(14, 30)),
  //   new ScheduleItem('Cultural', new Time(14, 30), new Time(15, 30)),
  //   new ScheduleItem('VSM', new Time(15, 30), new Time(16, 30)),
  // ];

  const filledScheduleItems = [];

  if (Time.timeDiff(startTime, scheduleItems[0].startTime) > 0) {
    filledScheduleItems.push(
      new ScheduleItem(
        { startTime, endTime: scheduleItems[0].startTime },
        ScheduleItemType.FILLER
      )
    );
  }

  for (let i = 0; i < scheduleItems.length - 1; i++) {
    try {
      const item = scheduleItems[i];
      const endTimeofPrev = item.endTime;
      const startTimeofNext = scheduleItems[i + 1].startTime;
      filledScheduleItems.push(item);
      if (Time.timeDiff(endTimeofPrev, startTimeofNext) > 0) {
        filledScheduleItems.push(
          new ScheduleItem(
            {
              startTime: endTimeofPrev,
              endTime: startTimeofNext,
            },
            ScheduleItemType.FILLER
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
  if (scheduleItems[scheduleItems.length - 1].type !== ScheduleItemType.END)
    filledScheduleItems.push(scheduleItems[scheduleItems.length - 1]);
  return filledScheduleItems;
};

function ScheduleColumn({
  scheduleItems,
  title,
  position,
  startTime,
  endTime,
}) {
  const filledScheduleItems = fillTimeSlots(scheduleItems, startTime, endTime);

  return (
    <div
      className={`md:mt-0 ${position === ColumnPosition.MID && ' '} ${
        position === ColumnPosition.LEFT && ' md:border-r-0'
      } ${position === ColumnPosition.RIGHT && ' md:border-l-0'}`}
    >
      <div className="border-b " style={{ height: '40px' }}>
        {title}
      </div>

      {filledScheduleItems.map((item, index) => (
        <EventBlock
          key={index}
          scheduleItem={item}
          position={position}
          type={item.type}
        />
      ))}
    </div>
  );
}

export default ScheduleColumn;

export const ColumnPosition = Object.freeze({
  MID: Symbol(1),
  LEFT: Symbol(2),
  RIGHT: Symbol(3),
});
