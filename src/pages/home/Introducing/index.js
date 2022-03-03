import React from 'react'
import IntroducingImage from './../../../resources/images/introducing.svg'
import Websidoe from './../../../resources/images/Websidoe.svg'
export default function Introducing() {
  return (
    <div className="introducing-wrapper">
      <div
        className="introducing"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <div className="introducing__left">
          <h3 className="introducing__left__subheader">Introducing</h3>
          <h1 className="introducing__left__header">SLAM GIRL</h1>
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
      <div
        className="websidoe"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <img alt="" src={Websidoe} className="websidoe__img" />
      </div>
    </div>
  )
}
