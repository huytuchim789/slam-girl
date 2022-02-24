import React from 'react'
import roadmapImg from './../../../resources/images/roadmap_img.png'
import timelineImg from './../../../resources/images/timeline_icon.png'
import { Timeline } from 'antd'
import { maps } from './maps'

export default function Roadmap() {
  return (
    <div className="roadmap">
      <div className="roadmap__container">
        <div className='roadmap__container-content'>
          <h1 className="roadmap__container__header">THE ROADMAP</h1>
          <div className="roadmap__container__subheader">
            Euismod sit iaculis ultrices in elit sed facilisis aliquet. Pharetra
            porttitor lacus eu viverra tellus morbi euismod quisque adipiscing. Id
            id vulputate sed feugiat tellus. Leo ac in purus in. Semper praesent a
            leo maecenas.
          </div>
          <div className="roadmap__timeline">
            {maps.map((map) => (
              <div className="roadmap__item">
                <h3 className="roadmap__item__phase">{map.phase}</h3>
                {Array.isArray(map.content) ? (
                  <ul>
                    {map.content.map((c) => (
                      <li className="roadmap__item_element">{c}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="roadmap__item_element">{map.content}</div>
                )}
                <span className="circle" />
              </div>
            ))}
          </div>
        </div>
        <img src={roadmapImg} className="roadmap__img" alt="" />
      </div>
    </div>
  )
}
