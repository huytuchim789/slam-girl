import React, { useContext } from 'react'
import Logo from './../../resources/images/Logo_slam.png'
import MenuIcon from './../../resources/images/menu_icon.svg'
import closeIcon from './../../resources/images/close_icon.png'
import { MenuContext } from 'pages/layout'

export default function NavBar({ isMobile }) {
  const { onMenu, setOnMenu } = useContext(MenuContext)

  return (
    <div className="navbar">
      {isMobile ? (
        <>
          <img src={Logo} className="logo" alt="logo" />
          <img
            src={onMenu ? closeIcon : MenuIcon}
            alt="menu"
            onClick={() => {
              setOnMenu(!onMenu)
            }}
          />
        </>
      ) : null}
      <div className="navigation">
        <a href="#banner">About</a>
        <a href="#story">Story</a>
        <a href="#collection">Artwork</a>
        <a href="#features">Utility</a>
        <a href="#roadmap">Roadmap</a>
        <a href="#the_team">Team</a>
      </div>
    </div>
  )
}
