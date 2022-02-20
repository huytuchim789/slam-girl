import React from 'react'
import { persons } from './persons'
export default function CreatedBy() {
  return (
    <div className="created_by">
      <h3 className="created_by__subheader">CREATED BY </h3>
      <h1 className="created_by__header">COMIC BOOK LEGENDS</h1>
      <div className="person_list">
        {persons.map((person) => (
          <div className="person_item">
            <img className="person_avatar" src={person.img} />
            <h2 className="person_name">{person.name}</h2>
            <h2 className="person_profile">{person.profile}</h2>
            <br />
            <a>Read More</a>
          </div>
        ))}
      </div>
    </div>
  )
}
