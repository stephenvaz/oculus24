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
import AEJ_image from '../assets/schedule/aej_schedule@4x.png';
import VSM_image from '../assets/schedule/vsm_schedule@4x.png';
import WOBD_image from '../assets/schedule/wob dance@4x.png';
import WOBM_image from '../assets/schedule/Artboard 2@4x.png';
import TKD_image from '../assets/schedule/takedown_schedule@4x.png';
import CRN_image from '../assets/schedule/Carnival_schedule@4x.png';
import PNT1_image from '../assets/schedule/pronite_schedule@4x.png';
import PNT2_image from '../assets/schedule/pronite@4x.png';
import SRG_image from '../assets/schedule/sargam_schedule@4x.png';


const day1 = [
  new ScheduleItem({
    startTime: new Time(9, 0),
    endTime: new Time(12, 0),
    image: VSM_image,
  }),
  new ScheduleItem({
    startTime: new Time(14, 0),
    endTime: new Time(17, 0),
    image: AEJ_image,
  }),
  new ScheduleItem({
    startTime: new Time(17, 0),
    endTime: new Time(19, 30),
    image: WOBM_image,
  }),
  new ScheduleItem({
    startTime: new Time(19, 30),
    endTime: new Time(22, 0),
    image: WOBD_image,
  }),
];

const day2 = [
  new ScheduleItem({
    startTime: new Time(9, 0),
    endTime: new Time(12, 0),
    image: VSM_image,
  }),
  new ScheduleItem({
    startTime: new Time(12, 0),
    endTime: new Time(14, 0),
    image: TKD_image,
  }),
  new ScheduleItem({
    startTime: new Time(14, 0),
    endTime: new Time(17, 0),
    image: CRN_image,
  }),
  new ScheduleItem({
    startTime: new Time(19, 0),
    endTime: new Time(22, 0),
    image: PNT1_image,
  }),
];

const day3 = [
  new ScheduleItem({
    startTime: new Time(9, 0),
    endTime: new Time(12, 0),
    image: VSM_image,
  }),
  
  new ScheduleItem({
    startTime: new Time(14, 0),
    endTime: new Time(17, 0),
    image: SRG_image,
  }),
  new ScheduleItem({
    startTime: new Time(19, 0),
    endTime: new Time(22, 0),
    image: PNT2_image,
  }),
];

const SchedulePage = () => {

  const startTime = new Time(9, 0);
  const endTime = new Time(22, 0);

  const [day, setDay] = React.useState(1);

  return (
    <div
      className=" py-28 mb-24  px-3 sm:px-20"
      // style={{ height: '2000px' }}
    >
      <h1 className="text-5xl neon font-bold mb-7 pl-7 lg:pl-0">Schedule</h1>

      <div className="mt-5 mb-5">
        <div className="gap-6 flex justify-center my-8 lg:hidden">
          <button
            className={`custom-btn btn-9 ${day === 1 && 'selected'}`}
            onClick={() => setDay(1)}
          >
            DAY 1
          </button>
          <button
            className={`custom-btn btn-9 ${day === 2 && 'selected'}`}
            onClick={() => setDay(2)}
          >
            DAY 2
          </button>
          <button
            className={`custom-btn btn-9 ${day === 3 && 'selected'}`}
            onClick={() => setDay(3)}
          >
            DAY 3
          </button>
        </div>
        <div className="flex flex-col align-middle justify-center ">
          <div className="text-white lg:grid lg:grid-cols-[1fr,3fr,3fr,3fr] text-center border-white hidden ">
            <TimeLine startTime={new Time(9, 0)} endTime={new Time(22, 0)} />
            <ScheduleColumn
              scheduleItems={day1}
              title={'DAY 1'}
              position={ColumnPosition.LEFT}
              startTime={startTime}
              endTime={endTime}
            />
            <ScheduleColumn
              scheduleItems={day2}
              title={'DAY 2'}
              position={ColumnPosition.MID}
              startTime={startTime}
              endTime={endTime}
            />
            <ScheduleColumn
              scheduleItems={day3}
              title={'DAY 3'}
              position={ColumnPosition.RIGHT}
              startTime={startTime}
              endTime={endTime}
            />
          </div>

          <div className="text-white   text-center border-white">
            {day === 1 && (
              <div className="text-white lg:hidden text-center border-white grid grid-cols-[1fr,3fr] ">
                <TimeLine
                  startTime={new Time(9, 0)}
                  endTime={new Time(22, 0)}
                />
                <ScheduleColumn
                  scheduleItems={day1}
                  title={'Parking lot'}
                  position={ColumnPosition.LEFT}
                  startTime={startTime}
                  endTime={endTime}
                />
              </div>
            )}
          </div>

          {day === 2 && (
            <div className="text-white   text-center border-white">
              <div className="text-white lg:hidden text-center border-white grid grid-cols-[1fr,3fr] ">
                <TimeLine
                  startTime={new Time(9, 0)}
                  endTime={new Time(22, 0)}
                />
                <ScheduleColumn
                  scheduleItems={day2}
                  title={'Seminar hall'}
                  position={ColumnPosition.MID}
                  startTime={startTime}
                  endTime={endTime}
                />
              </div>
            </div>
          )}

          {day === 3 && (
            <div className="text-white   text-center border-white">
              <div className="text-white lg:hidden text-center border-white grid grid-cols-[1fr,3fr] ">
                <TimeLine
                  startTime={new Time(9, 0)}
                  endTime={new Time(22, 0)}
                />
                <ScheduleColumn
                  scheduleItems={day3}
                  title={'Place 999'}
                  position={ColumnPosition.RIGHT}
                  startTime={startTime}
                  endTime={endTime}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
