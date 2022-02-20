import React from 'react'
import BannerBG from './../../../resources/images/Hero BG.png'
import BannerBG2 from './../../../resources/images/SG-Website-BG-MD-1.png'
import BannerImg from './../../../resources/images/SG - 1.png'
export default function Banner() {
  return (
    <div className="banner">
      <img alt="img" src={BannerBG} className="img-1" />
      <img alt="img" src={BannerBG2} className="img-2" />
      <img alt="img" src={BannerImg} className="img-3" />
      <div className="banner__box">
        <div className="banner__box__container">
          <div className="banner__box__container__header">Slam girl</div>
          <div className="banner__box__container__content">
            The Secret Origin of a Hero
          </div>
          <button type="button" className="banner__box__container__btn">
            This is a CTA
          </button>
        </div>
      </div>
    </div>
  )
}
