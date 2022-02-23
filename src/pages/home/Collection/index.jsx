import React from 'react'
import collection1 from './../../../resources/images/collection_1.png'
import collection2 from './../../../resources/images/collection_2.png'
import collection3 from './../../../resources/images/collection_3.png'
import collection4 from './../../../resources/images/collection_4.png'
import collection5 from './../../../resources/images/collection_5.png'
import collection6 from './../../../resources/images/collection_6.png'
import collection8 from './../../../resources/images/collection_8.png'
import rightArrow from './../../../resources/images/right_arrow.svg'
import leftArrow from './../../../resources/images/left_arrow.svg'
export default function Collection() {
  return (
    <div className="collections">
      <h1 className="collections__header">the collection</h1>
      <div className="row-1">
        <img src={collection1} alt="" />
        <img src={collection2} alt="" />
        <img src={collection3} alt="" />
        <div className="arrow-wrapper">
          <img src={rightArrow} alt="" className="right_arrow" />
        </div>
      </div>
      <div className="row-2">
        <div className="arrow-wrapper">
          <img src={leftArrow} alt="" className="left_arrow" />
        </div>
        <img src={collection4} alt="" />
        <img src={collection5} alt="" />
        <img src={collection6} alt="" />
      </div>
      <div className="row-3">
        <img src={collection8} alt="" />
      </div>
    </div>
  )
}
