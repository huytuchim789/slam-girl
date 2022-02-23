import React from 'react'
import partner8 from './../../../resources/images/partner-8.png'
import partner9 from './../../../resources/images/partner-9.png'
import partner10 from './../../../resources/images/partner-10.png'
import partner11 from './../../../resources/images/partner-11.png'
import partner12 from './../../../resources/images/partner-12.png'
import partner13 from './../../../resources/images/partner-13.png'

//icon
import discordIcon from './../../../resources/images/discord_icon.svg'
import twitterIcon from './../../../resources/images/twitter_icon.svg'
import instaIcon from './../../../resources/images/insta_icon.svg'
export default function Partners() {
  return (
    <>
      <div className="partners">
        <h1 className="partners__header">Partners</h1>
        <div className="partners__list">
          <img src={partner8} alt="" />
          <img src={partner9} alt="" />
          <img src={partner10} alt="" />
          <img src={partner11} alt="" />
          <img src={partner12} alt="" />
          <img src={partner13} alt="" />
        </div>
      </div>
      <div className="community">
        <h1 className="community__header">JOIN THE COMMUNTY</h1>
        <div className="community__list">
          <img src={discordIcon} alt="" />
          <img src={instaIcon} alt="" />
          <img src={twitterIcon} alt="" />
        </div>
      </div>
    </>
  )
}
