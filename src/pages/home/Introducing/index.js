import React from 'react'
import IntroducingImage from './../../../resources/images/introducing.svg'
import Websidoe from './../../../resources/images/Websidoe.svg'
export default function Introducing() {
  return (
    <div className="introducing-wrapper">
      <div className="introducing">
        <div className="introducing__left">
          <span className="introducing__left__subheader">Introducing</span>
          <span className="introducing__left__header">SLAM GIRL</span>
          <span className="introducing__left__content">
            For the first time in history, a Super Hero(ine) created by one of
            the most iconic names in Super Hero lore will be introduced to the
            world . This collection will be developed into NFTs with the
            flagship franchise, Slam-Girl, making history by offering all of its
            IP rights as a Stan Lee Super Hero franchise attached to an NFT
          </span>
        </div>
        <img alt="img" className="introducing__right" src={IntroducingImage} />
      </div>
      <div className="websidoe">
        <img alt="" src={Websidoe} className="websidoe__img" />
      </div>
    </div>
  )
}
