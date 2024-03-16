import React, {useState, useEffect} from 'react';
import { Time } from './ScheduleItem';
import { EVENT_HEIGHT } from './constants';

const generateTimeLine = (startTime, endTime) => {
  const temp = new Time(startTime.hour, startTime.minute);
  const timeLine = [];

  while (Time.timeDiff(temp, endTime) > 0) {
    timeLine.push(new Time(temp.hour, temp.minute));
    temp.hour += 1;
    // console.log('start', timeLine);
  } 
  if (Time.timeDiff(timeLine[timeLine.length -1], endTime) > 0) timeLine.push(new Time(endTime.hour, endTime.minute));
  // console.log('timeline ===========================================',timeLine);
  
  return timeLine;
};

function TimeLine({ startTime, endTime }) {
  const [timeLine, setTimeLine] = useState([])
  
  useEffect(() => {
    if (timeLine.length === 0) setTimeLine((e) => generateTimeLine(startTime, endTime));

  },[])
  
  return (
    <div>
      <div
        style={{
          height: '40px',
        }}
      >
        {/* Time Line */}
      </div>
      {
        timeLine.map((time, index) => (
          <div key={index} style={{
            height: `${EVENT_HEIGHT*60}px`,
            // border: '1px solid red',
            position: 'relative',
          }}>
            <span className='absolute -mt-3 w-20 left-3' >
            {time.toString()}
            </span>
          </div>
        ))
      }
    </div>
  );
}

export default TimeLine;
