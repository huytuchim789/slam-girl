import React from 'react'
import { persons } from './persons'
import decor from './../../../resources/images/Decor.svg'
export default function CreatedBy() {
  return (
    <div className="created_by">
      <h3 className="created_by__subheader">CREATED BY </h3>
      <h1 className="created_by__header">COMIC BOOK LEGENDS</h1>
      <div className="person_list">
        {persons.map((person) => (
          <div className="person_item" style={{ marginTop: person.mrTop }}>
            <div className="person_avatar">
              {/* <img className="decor" alt="" src={decor} /> */}
              <img className="person_avatar_img" src={person.img} alt="" />
            </div>
            <div className="person_content">
              <h2 className="person_name">{person.name}</h2>
              <span className="person_profile">{person.profile}</span>
              <br />
              <a href="/">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
