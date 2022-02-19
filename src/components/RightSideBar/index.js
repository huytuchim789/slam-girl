import React from 'react'
import MenuIcon from './../../resources/images/menu_icon.svg'

export default function RightSideBar() {
  return (
    <section className="right_sidebar">
      <div className="menu_icon_container ">
        <img className="menu_icon" src={MenuIcon} alt="menu" />
      </div>
    </section>
  )
}
