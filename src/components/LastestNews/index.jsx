import React, { Fragment } from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';

import { renderCards } from './render-card';
// import * as moment from 'moment';
import 'moment/locale/ja';
import 'moment/locale/zh-cn';
import 'moment/locale/ko';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';
import { LATESTNEWS_BREAKPOINTS } from 'common/constant';
import  ICLinkLight from 'resources/images/ic_link_light.svg';
import  ICLink from 'resources/images/ic_link.svg';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const LatestNews = ({isDarkMode}) => {
  const { t, i18n } = useTranslation();


  return (
    <section className="section latest-news" id="latest-news">
      <div className="container">
        <Row className="title">
          <Title level={4} class="section__header">
            {t('news.title')}
            <span>
              <a href={'https://news.nftify.network/'} target="_blank" rel="noreferrer">
                {t('news.view_all')}
              </a>
            </span>
          </Title>
        </Row>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          slidesPerGroup={1}
          breakpoints={LATESTNEWS_BREAKPOINTS}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={false}
          className="latest-news__cards"
        >
          {renderCards(t).map(({ date, title, content, url, img, isLink }) => (
            <SwiperSlide key={title}>
              <Card cover={img}>
                <Meta
                  title={
                    <Fragment>
                      {/* <Paragraph>{getDate(date)}</Paragraph> */}
                      <Title level={5} title={title}>
                        {title}
                      </Title>
                    </Fragment>
                  }
                  description={
                    <Fragment>
                      <Paragraph className="latest-news__cards--content">{content}</Paragraph>
                      <a href={url} target="_blank" rel="noreferrer">
                        {t('news.read_more')}
                      </a>
                      {isLink && 
                        <img
                          className='icon--link'
                          src={!isDarkMode  ? ICLinkLight : ICLink}
                          alt="Icon Link"
                        />
                      }
                    </Fragment>
                  }
                />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LatestNews;
