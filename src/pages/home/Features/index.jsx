import React from 'react'
import { features } from './features'
import headerImg from './../../../resources/images/features-header_img.png'
import footerImg from './../../../resources/images/features-footer_img.png'
import benefitImg from './../../../resources/images/benefit.png'
import benefitItemIcon from './../../../resources/images/benefit_item_icon.png'
import { benefits } from './benefits'
export default function Features({ isMobile }) {
  return (
    <>
      <div className="features">
        <img src={headerImg} className="header_img" />
        <h1 className="features__header">FEATURES & UTILITY</h1>
        <div className="features__list">
          {features.map((feature) => (
            <div className="features__item">
              <img
                className="features__item__avatar"
                src={feature.img}
                alt=""
              />
              <div className="features__item_container">
                <h3 className="features__item__header">{feature.header}</h3>
                <div className="features__item__content">{feature.content}</div>
              </div>
            </div>
          ))}
        </div>
        <img src={footerImg} className="footer_img" alt="" />
      </div>
      <div className="benefits">
        <img src={benefitImg} alt="" className="benefits__img" />
        <div className="benefits__container">
          <h1 className="benefits__container__header">BENEFITS & REWARDS</h1>
          <h2 className="benefits__container__subheader">
            Slam Girl NFT owners receive:
          </h2>
          <div className="benefits__container__list">
            {benefits.map((benefit) => (
              <div className="benefits__container__item">
                <img src={benefitItemIcon} alt="" />
                <div className="benefits__container__item__content">
                  {benefit.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
