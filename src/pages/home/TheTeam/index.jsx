import React from 'react'
import { teams } from './teams'
import discordIcon from './../../../resources/images/discord_icon.svg'
import twitterIcon from './../../../resources/images/twitter_icon.svg'
import instaIcon from './../../../resources/images/insta_icon.svg'
import sendIcon from './../../../resources/images/send_icon.svg'
export default function TheTeam() {
  return (
    <div className="teams">
      <h1 className="teams__header">THE team</h1>
      <div className="teams__list">
        {teams.map((team) => (
          <div className="teams__item">
            <img src={team.img} alt="" className="teams__item__img" />
            <div className="teams__item__content">
              <h3 className="teams__item__content__name">{team.name}</h3>
              <div className="teams__item__content__jobs">{team.positions}</div>
              <div className="teams__item__content__icon">
                <img src={discordIcon} alt="" />
                <img src={instaIcon} alt="" />
                <img src={twitterIcon} alt="" />
                <img src={sendIcon} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
