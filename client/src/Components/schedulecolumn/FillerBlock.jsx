import React from 'react'
import { Time } from './ScheduleItem'
import { EVENT_HEIGHT } from './constants'

function FillerBlock({scheduleItem}) {
  const duration = Time.timeDiff(scheduleItem.startTime, scheduleItem.endTime)
  return (
    <div style={{
      height: `${duration * EVENT_HEIGHT}px`,
    }} className='border-white border-b flex flex-col justify-center items-center text-white '

    >
      {/* Filler */}
    </div>
  )
}

export default FillerBlock