import React from 'react';
import {
  ScheduleItem,
  ScheduleItemType,
  Time,
} from '../Components/schedulecolumn/ScheduleItem';
import ScheduleColumn, {
  ColumnPosition,
} from '../Components/schedulecolumn/ScheduleColumn';
import TimeLine from '../Components/schedulecolumn/TimeLine';

const day1Schedule = [
  new ScheduleItem('VSM', new Time(9, 0), new Time(12, 0)),
  // new ScheduleItem('Break', new Time(11, 0), new Time(11, 30)),
  // new ScheduleItem('Technical', new Time(11, 30), new Time(12, 30 )),
  new ScheduleItem('Lunch', new Time(12, 30), new Time(13, 30)),
  // new ScheduleItem('Fun', new Time(13, 30), new Time(14, 30)),
  new ScheduleItem('Cultural', new Time(14, 30), new Time(15, 30)),
  new ScheduleItem('VSM', new Time(15, 30), new Time(16, 30)),
  new ScheduleItem(
    'Last',
    new Time(22, 0),
    new Time(22, 0),
    ScheduleItemType.END
  ),
];

const day2Schedule = [
  new ScheduleItem('VSM', new Time(10, 0), new Time(11, 0)),
  // new ScheduleItem('Technical', new Time(11, 30), new Time(12, 30 )),
  // new ScheduleItem('Lunch',9ew Time(12, 30), new Time(13, 30)),
  // new ScheduleItem('Fun', new Time(13, 30), new Time(14, 30)),
  new ScheduleItem('Cultural', new Time(14, 30), new Time(15, 30)),
  new ScheduleItem('VSM', new Time(15, 30), new Time(16, 30)),
  new ScheduleItem(
    'Last',
    new Time(22, 0),
    new Time(22, 0),
    ScheduleItemType.END
  ),
];

const day3Schedule = [
  new ScheduleItem('VSM', new Time(10, 0), new Time(11, 0)),
  new ScheduleItem('Technical', new Time(11, 30), new Time(12, 30)),
  // new ScheduleItem('Lunch', new Time(12, 30), new Time(13, 30)),
  new ScheduleItem('Fun', new Time(13, 30), new Time(14, 30)),
  new ScheduleItem('Cultural', new Time(14, 30), new Time(15, 30)),
  // new ScheduleItem('VSM', new Time(15, 30), new Time(16, 30)),
  new ScheduleItem('Another Event', new Time(17, 30), new Time(18, 0)),
  new ScheduleItem('Another Event', new Time(20, 30), new Time(22, 0)),
];

const SchedulePage = () => {
  let scheduleItems = [
    new ScheduleItem('Pre - Events', '10:00 AM', '11:00 AM', 'Event 1'),
  ];

  const startTime = new Time(9, 0);
  const endTime = new Time(22, 0);

  return (
    <div
      className="h-full w-full py-28 x-container mb-24"
      // style={{ height: '2000px' }}
    >
      <h1 className="text-5xl neon font-bold mb-7">Schedule</h1>
      {/* <div className="flex flex-row gap-4 flex-wrap">
        <button className="custom-btn btn-9" onClick={() => setSelected('All')}>
          All
        </button>
        <button
          className="custom-btn btn-9"
          onClick={() => setSelected('Pre - Events')}
        >
          Pre - Events
        </button>
        <button
          className="custom-btn btn-9"
          onClick={() => setSelected('Technical')}
        >
          Technical
        </button>
        <button className="custom-btn btn-9" onClick={() => setSelected('Fun')}>
          Fun
        </button>
        <button
          className="custom-btn btn-9"
          onClick={() => setSelected('Cultural')}
        >
          Cultural
        </button>
      </div> */}
<div>
      <div className="flex flex-col align-middle justify-center ">
        <div className="text-white lg:grid lg:grid-cols-[1fr,3fr,3fr,3fr] text-center border-white hidden ">
          <TimeLine startTime={new Time(9, 0)} endTime={new Time(22, 0)} />
          <ScheduleColumn
            scheduleItems={day1Schedule}
            title={'Parking lot'}
            position={ColumnPosition.LEFT}
            startTime={startTime}
            endTime={endTime}
          />
          <ScheduleColumn
            scheduleItems={day2Schedule}
            title={'Seminar hall'}
            position={ColumnPosition.MID}
            startTime={startTime}
            endTime={endTime}
          />
          <ScheduleColumn
            scheduleItems={day3Schedule}
            title={'Place 999'}
            position={ColumnPosition.RIGHT}
            startTime={startTime}
            endTime={endTime}
          />
        </div>

        <div className="text-white   text-center border-white">
          <div className="text-white lg:hidden text-center border-white grid grid-cols-[1fr,3fr] ">
            <TimeLine startTime={new Time(9, 0)} endTime={new Time(22, 0)} />
            <ScheduleColumn
              scheduleItems={day1Schedule}
              title={'Parking lot'}
              position={ColumnPosition.LEFT}
              startTime={startTime}
              endTime={endTime}
            />
         
          </div>
        </div>

        <div className="text-white   text-center border-white">
          <div className="text-white lg:hidden text-center border-white grid grid-cols-[1fr,3fr] ">
            <TimeLine startTime={new Time(9, 0)} endTime={new Time(22, 0)} />
            <ScheduleColumn
              scheduleItems={day2Schedule}
              title={'Seminar hall'}
              position={ColumnPosition.MID}
              startTime={startTime}
              endTime={endTime}
            />
          </div>
        </div>

        <div className="text-white   text-center border-white">
          <div className="text-white lg:hidden text-center border-white grid grid-cols-[1fr,3fr] ">
            <TimeLine startTime={new Time(9, 0)} endTime={new Time(22, 0)} />
            <ScheduleColumn
              scheduleItems={day3Schedule}
              title={'Place 999'}
              position={ColumnPosition.RIGHT}
              startTime={startTime}
              endTime={endTime}
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SchedulePage;
