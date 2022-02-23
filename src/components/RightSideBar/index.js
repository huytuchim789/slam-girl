import React, { useContext } from 'react'
import MenuIcon from './../../resources/images/menu_icon.svg'
import closeIcon from './../../resources/images/close_icon.png'
import discordIcon from './../../resources/images/discord_icon.svg'
import twitterIcon from './../../resources/images/twitter_icon.svg'
import instaIcon from './../../resources/images/insta_icon.svg'
import sendIcon from './../../resources/images/send_icon.svg'
import { MenuContext } from 'pages/layout'
export default function RightSideBar() {
  const { onMenu, setOnMenu } = useContext(MenuContext)
  return (
    <section className="right_sidebar">
      <div
        className="menu_icon_container"
      >
        <img
          className="menu_icon"
          src={onMenu ? closeIcon : MenuIcon}
          alt="menu"
          onClick={() => {
            setOnMenu(!onMenu)
          }}
        />
      </div>
      <span className="right_sidebar__header">Join us</span>
      <div className="right_sidebar__icon_list">
        <img alt="img" className="right_sidebar__icon_item" src={discordIcon} />
        <img alt="img" className="right_sidebar__icon_item" src={instaIcon} />
        <img alt="img" className="right_sidebar__icon_item" src={twitterIcon} />
        <img alt="img" className="right_sidebar__icon_item" src={sendIcon} />
      </div>
    </section>
  )
}
