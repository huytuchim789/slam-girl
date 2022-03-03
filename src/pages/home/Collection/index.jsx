import React from 'react'
import collection1 from './../../../resources/images/collection_1.png'
import collection2 from './../../../resources/images/collection_2.png'
import collection3 from './../../../resources/images/collection_3.png'
import collection4 from './../../../resources/images/collection_4.png'
import collection5 from './../../../resources/images/collection_5.png'
import collection6 from './../../../resources/images/collection_6.png'
import collection8 from './../../../resources/images/collection_8.svg'
import rightArrow from './../../../resources/images/right_arrow.svg'
import leftArrow from './../../../resources/images/left_arrow.svg'
import { Carousel } from 'antd'
export default function Collection() {
  const COLLECTION_1 = [
    {
      src: collection1,
      alt: '',
    },
    {
      src: collection2,
      alt: '',
    },
    {
      src: collection3,
      alt: '',
    },
    {
      src: collection4,
      alt: '',
    },
  ]

  const COLLECTION_2 = [
    {
      src: collection4,
      alt: '',
    },
    {
      src: collection5,
      alt: '',
    },
    {
      src: collection6,
      alt: '',
    },
    {
      src: collection1,
      alt: '',
    },
  ]

  const carouselConfig = {
    draggable: true,
    swipeToSlide: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2.3,
          infinite: false,
        },
      },
    ],
  }

  return (
    <div className="collections">
      <h1 className="collections__header">the collection</h1>
      <div className="row-1">
        <Carousel
          {...carouselConfig}
          nextArrow={
            <div className="arrow-wrapper">
              <img src={rightArrow} alt="" />
            </div>
          }
        >
          {COLLECTION_1.map(({ src, alt }) => (
            <img src={src} alt={alt} key={src} />
          ))}
        </Carousel>
      </div>
      <div className="row-2">
        <Carousel
          {...carouselConfig}
          prevArrow={
            <div className="arrow-wrapper">
              <img src={leftArrow} alt="" />
            </div>
          }
        >
          {COLLECTION_2.map(({ src, alt }) => (
            <img src={src} alt={alt} key={src} />
          ))}
        </Carousel>
      </div>

      <div className="row-3">
        <img src={collection8} alt="" />
      </div>
    </div>
  )
}
