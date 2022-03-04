import React, { useContext } from 'react'
import MenuIcon from './../../resources/images/menu_icon.svg'
import closeIcon from './../../resources/images/close_icon.png'
import discordIcon from './../../resources/images/discord_icon.svg'
import twitterIcon from './../../resources/images/twitter_icon.svg'
import instaIcon from './../../resources/images/insta_icon.svg'
import sendIcon from './../../resources/images/send_icon.svg'
import { MenuContext } from 'pages/layout'
export default function RightSideBar({ isMobile }) {
  const { onMenu, setOnMenu } = useContext(MenuContext)
  return (
    <section className="right_sidebar">
      <div className={`menu_icon_container ${onMenu ? 'menu-bg' : ''}`}>
        <img
          className={`menu_icon`}
          src={onMenu ? closeIcon : MenuIcon}
          alt="menu"
          onClick={() => {
            setOnMenu(!onMenu)
          }}
        />
      </div>

      <span className="right_sidebar__header">Join us</span>
      <div className="right_sidebar__icon_list">
        <a href="https://discord.com/" target="_blank">
          <img
            alt="img"
            className="right_sidebar__icon_item"
            src={discordIcon}
          />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img alt="img" className="right_sidebar__icon_item" src={instaIcon} />
        </a>
        <a href="https://twitter.com/?lang=en" target="_blank">
          <img
            alt="img"
            className="right_sidebar__icon_item"
            src={twitterIcon}
          />
        </a>
        <a href="https://www.messenger.com/" target="_blank">
          <img alt="img" className="right_sidebar__icon_item" src={sendIcon} />
        </a>
      </div>
    </section>
  )
}
