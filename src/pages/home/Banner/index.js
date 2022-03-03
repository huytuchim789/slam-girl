import React, { useEffect, useState } from 'react'
import BannerBG from './../../../resources/images/Hero BG.png'
import BannerBG2 from './../../../resources/images/SG-Website-BG-MD-1.png'
import BannerImg from './../../../resources/images/SG - 1.png'
import { addDays } from 'utils/addDay'
import { getRemainingTime } from 'utils/countdownTimer'
import { defaultRemainingTime } from 'components/LeftSideBar'
export default function Banner({ isMobile }) {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)
  useEffect(() => {
    const countdown = addDays(new Date(), 2)
    const intervalId = setInterval(() => {
      updateRemainingTime(countdown)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])
  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTime(countdown))
  }
  return (
    <div className="banner">
      {!isMobile ? <div className="gradient"></div> : null}
      <img alt="img" src={BannerBG} className="img-1" />
      <img alt="img" src={BannerBG2} className="img-2" />
      {!isMobile ? (
        <>
          <img alt="img" src={BannerImg} className="img-3" />
          <div
            className="banner__box"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
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
        </>
      ) : (
        <>
          <div
            className="banner__box"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="banner__box__container">
              <div className="banner__box__container__header">Slam girl</div>
              <div className="banner__box__container__content">
                The Secret Origin of a Hero
              </div>
              <button type="button" className="banner__box__container__btn">
                This is a CTA
              </button>
              {isMobile ? (
                <div className="datetime_countdown">
                  <div className="datetime_item">
                    <span className="datetime_value">{remainingTime.days}</span>
                    <span className="datetime_label">Days</span>
                  </div>
                  <div className="datetime_item">
                    <span className="datetime_value">
                      {remainingTime.hours}
                    </span>
                    <span className="datetime_label">Hours</span>
                  </div>
                  <div className="datetime_item">
                    <span className="datetime_value">
                      {remainingTime.minutes}
                    </span>
                    <span className="datetime_label">Minutes</span>
                  </div>
                  <div className="datetime_item">
                    <span className="datetime_value">
                      {remainingTime.seconds}
                    </span>
                    <span className="datetime_label">Seconds</span>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <img alt="img" src={BannerImg} className="img-3" />
        </>
      )}
    </div>
  )
}
