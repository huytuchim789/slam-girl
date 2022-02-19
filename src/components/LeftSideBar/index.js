import React from 'react'

export default function LeftSideBar() {
  return (
    <section className="left_sidebar">
      <div className="logo_container"></div>
      <span className="left_sidebar__header">To launch</span>
      <div className="datetime_countdown">
        <div className="datetime_item">
          <span className="datetime_value">02</span>
          <span className="datetime_label">Days</span>
        </div>
        <div className="datetime_item">
          <span className="datetime_value">12</span>
          <span className="datetime_label">Hours</span>
        </div>
        <div className="datetime_item">
          <span className="datetime_value">59</span>
          <span className="datetime_label">Minutes</span>
        </div>
        <div className="datetime_item">
          <span className="datetime_value">32</span>
          <span className="datetime_label">Seconds</span>
        </div>
      </div>
    </section>
  )
}
