import React from 'react'
import { ScheduleItemType, Time } from './ScheduleItem'
import { EVENT_HEIGHT } from './constants'
import { ColumnPosition } from './ScheduleColumn'

function EventBlock({scheduleItem, type, position}) {
  const duration = Time.timeDiff(scheduleItem.startTime, scheduleItem.endTime)
  return (
    <div style={{
      height: `${duration * EVENT_HEIGHT}px`,
      backgroundColor: ''
    }} className={`border-white border-b  ${type === ScheduleItemType.EVENT && 'bg-secondary-dark'} flex flex-col justify-center items-center text-white ${position === ColumnPosition.LEFT && 'border-l lg:border-r-0 border-r'} ${position === ColumnPosition.RIGHT && 'border-r lg:border-l-0 border-l'} ${position === ColumnPosition.MID && 'border-l border-r'}`}

    >
      {(type === ScheduleItemType.EVENT) ?
      <>
      <h1>{scheduleItem.title}</h1>
      {scheduleItem.startTime.toString()} - {scheduleItem.endTime.toString()}
      </>
      :""}
    </div>
  )
}

export default EventBlock