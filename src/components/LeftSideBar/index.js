import React, { useEffect, useState } from 'react'
import { addDays } from 'utils/addDay'
import { getRemainingTime } from 'utils/countdownTimer'
const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
}
export default function LeftSideBar() {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)
  useEffect(() => {
    const countdown = addDays(new Date(), 2)
    console.log(countdown)
    const intervalId = setInterval(() => {
      updateRemainingTime(countdown)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])
  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTime(countdown))
  }
  return (
    <section className="left_sidebar">
      <div className="logo_container"></div>
      <span className="left_sidebar__header">To launch</span>
      <div className="datetime_countdown">
        <div className="datetime_item">
          <span className="datetime_value">{remainingTime.days}</span>
          <span className="datetime_label">Days</span>
        </div>
        <div className="datetime_item">
          <span className="datetime_value">{remainingTime.hours}</span>
          <span className="datetime_label">Hours</span>
        </div>
        <div className="datetime_item">
          <span className="datetime_value">{remainingTime.minutes}</span>
          <span className="datetime_label">Minutes</span>
        </div>
        <div className="datetime_item">
          <span className="datetime_value">{remainingTime.seconds}</span>
          <span className="datetime_label">Seconds</span>
        </div>
      </div>
    </section>
  )
}
